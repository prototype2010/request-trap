import { IndexedObject } from '../../../types';

export class ExtractPropertyDescriptor<T> {
  constructor(private _propName: string, private _extractProp: string) {}

  public extract(extractTarget: IndexedObject<any>): IndexedObject<T> {
    return { [this.propName]: extractTarget[this.extractProp] };
  }

  get propName(): string {
    return this._propName;
  }

  set propName(value: string) {
    this._propName = value;
  }

  get extractProp(): string {
    return this._extractProp;
  }

  set extractProp(value: string) {
    this._extractProp = value;
  }
}
