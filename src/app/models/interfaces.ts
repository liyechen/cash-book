export interface Expenditure {
    expenditureNumber: number
    expenditureType: string
    date: string
}

export interface DailyExpenditure {
    date: string,
    expendList: Expenditure[]
}