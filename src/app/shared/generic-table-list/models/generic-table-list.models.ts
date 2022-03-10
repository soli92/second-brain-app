export enum GenericTableListType {
    TABLE = 'table',
    CARD_LIST = 'card-list'
};


export interface GenerciTableListElemConfig<T> {
    title: string;
    data: T;
}

export interface GenericTableListConfig<T> {
    mode: GenericTableListType;
    items: T[];
}