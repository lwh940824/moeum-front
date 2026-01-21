import { Button, Dialog, DialogContent, DialogTrigger, Input, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarInset } from "@moeum/ui";
import { CategoryApi } from "../../service/api/category";

export default function Category() {
    const createCategory = () => {
        CategoryApi.createCategory({name: "적금", categoryType: "EXPENSE", imageUrl: ""})
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>카테고리 추가</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[900px] w-full p-0 gap-0 overflow-hidden h-[600px] block">
                    <SidebarProvider className="max-h-full h-full min-h-0">
                        <Sidebar collapsible="none" className="bg-gray-100 border-r">
                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {['가계부', '카테고리', '결제수단', '반복 생성', '자산 현황', '투자 현황'].map((item) => (
                                                <SidebarMenuItem key={item}>
                                                    <SidebarMenuButton isActive={item === '카테고리'}>
                                                        <span>{item}</span>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>
                        </Sidebar>

                        <SidebarInset className="max-h-full flex flex-col min-h-0 bg-white">
                            {/* Main Content */}
                            <div className="flex-1 flex overflow-hidden">
                                {/* Deposit Categories */}
                                <section className="flex-1 border-r p-4 flex flex-col gap-4 min-h-0">
                                    <div className="text-center font-bold bg-gray-100 py-2 rounded shrink-0">입금 카테고리</div>
                                    <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="border rounded p-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 shrink-0">
                                                <span>아이콘 / 카테고리명 {i + 1}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Withdrawal Categories */}
                                <section className="flex-1 p-4 flex flex-col gap-4 min-h-0">
                                    <div className="text-center font-bold bg-gray-100 py-2 rounded shrink-0">출금 카테고리</div>
                                    <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="border rounded p-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 shrink-0">
                                                <span>아이콘 / 카테고리명 {i + 1}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Bottom Action Footer */}
                            <div className="h-[80px] border-t bg-white p-4 flex items-center gap-2 shrink-0">
                                <Button variant="ghost" className="w-[100px] border">아이콘</Button>
                                <Input className="flex-1" placeholder="카테고리명" />
                                <Button variant="ghost" className="border">입금 / 출금</Button>
                                <Button variant="ghost" className="border">상위 카테고리</Button>
                                <Button onClick={createCategory}>추가 / 수정</Button>
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </DialogContent>
            </Dialog>
        </div>
    )
}