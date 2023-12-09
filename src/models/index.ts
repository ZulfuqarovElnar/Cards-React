export interface Root {
    detailForCashback: DetailForCashback;
    detailForInterest: DetailForInterest;
}
export interface DetailForCashback {
    fuel: number;
    store: number;
    grocers: number;
    other: number;
}
export interface DetailForInterest {
    accountBalance: number;
}

export interface CardData {
    id: number;
    bankOfCard: string;
    cardName: string;
    cardType: string;
    interestYearly: number;
    cashbackId: number;
    limitsId: number;
    cashback: Cashback;
    cashbackIncome: number;
    interestRateIncome: number;
    totalIncome: number;
}
export interface Cashback {
    id: number;
    fuel: number;
    store: number;
    grocers: number;
    other: number;
}
