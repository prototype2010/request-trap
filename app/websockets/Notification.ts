export class Notification {
  constructor(private message: any) {}

  public getMessage(): string {
    return JSON.stringify(this.message);
  }
}
