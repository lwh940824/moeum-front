import { Button, CardDescription, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@moeum/ui";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@moeum/ui";
import { useState } from "react";

export default function RateCalculator() {
    const [principal, setPrincipal] = useState<number | string>("");    // 투자원금
    const [monthlyAdd, setMonthlyAdd] = useState<number | string>("");  // 적립금액
    const [interestRate, setInterestRate] = useState<number | string>(""); // 이자율
    const [term, setTerm] = useState<number | string>("");              // 기간
    const [period, setPeriod] = useState("DAY");                        // 기간 단위
    const [result, setResult] = useState<number | null>(null);          // 계산 결과

    const handleCalculate = () => {
        const p = Number(principal) || 0;
        const pmt = Number(monthlyAdd) || 0;
        const annualR = (Number(interestRate) || 0) / 100;

        let n = Number(term) || 0;
        let r = annualR / 12; // 기본 월 복리 기준

        if (period === 'YEAR') {
            n = Number(term); // 기간: n년
            r = annualR;      // 연복리 적용
        } else if (period === 'MONTH') {
            n = Number(term); // 기간: n개월
            r = annualR / 12; // 월복리 적용
        } else if (period === 'DAY') {
            n = Number(term); // 기간: n일
            r = annualR / 365; // 일복리 적용
        }

        // 0으로 나누기 방지 및 이자율이 0일 경우 예외 처리
        if (r === 0) {
            setResult(p + (pmt * n));
            return;
        }

        // 공통 계산 (기입불 방식 적용)
        const total = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        setResult(Math.round(total));
        console.log(total);
    }

    return (
        <div className="flex flex-col gap-4">
            <Card>
                <CardHeader align="center">
                    <CardTitle>복리 계산기</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="투자원금을 입력해주세요" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
                    <Input placeholder="적립금액을 입력해주세요" value={monthlyAdd} onChange={(e) => setMonthlyAdd(Number(e.target.value))} />
                    <Input placeholder="이자율(연)을 입력해주세요" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
                    <div className="flex gap-2">
                        <Input placeholder="기간을 입력해주세요" value={term} onChange={(e) => setTerm(Number(e.target.value))} />
                        <div className="w-20">
                            <Select value={period} onValueChange={setPeriod}>
                                <SelectTrigger className="w-20">
                                    <SelectValue placeholder="기간" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="DAY">일</SelectItem>
                                    <SelectItem value="MONTH">월</SelectItem>
                                    <SelectItem value="YEAR">년</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={handleCalculate}>계산하기</Button>
                </CardFooter>
            </Card>
        </div>
    )
}   