export interface IState {
    table: IEmployee[];
    sortedTable: IEmployee[];
    search: SearchType;
}

export type SearchType = {
    value: string;
    quantity: number;
};

export interface IEmployee {
    id: string;
    name: string;
    email: string;
    status: StatusEnum;
    role: string;
}

export enum StatusEnum {
    FREE = "Free",
    BUSY = "Busy",
    WORKIN = "Workin",
    ON_VACATION = "On Vacation",
}

type KeyOfString<T> = keyof T & string;

export type EmployeeWithoutIdEmailType = KeyOfString<
    Omit<IEmployee, "id" | "email">
>;
