export interface IndexedObject<T> {
  [index: string]: T;
}

interface RequestParams {
  headers: IndexedObject<string | object>;
  cookies: IndexedObject<string>;
  ip: string;
  method: string;
  secure: boolean;
  query: string;
  params: object;
  url: string;
}

export interface SignedWithDate {
  date: number;
}

export type RequestInfo = RequestParams & SignedWithDate;
