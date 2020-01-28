export interface IndexedObject<T> {
  [index: string]: T;
}

export interface RequestParams {
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

export interface Trapped {
  trapId: string;
}

export type RequestInfo = RequestParams & SignedWithDate;

export type TrappedRequestInfo = RequestInfo & Trapped;
