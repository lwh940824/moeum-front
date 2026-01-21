export type Provider = {
    id: 'google' | 'kakao';
    label: string;
    onClick: () => void;
    icon: React.ElementType;
}

export type Providers = Provider[];