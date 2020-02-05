import { Controller } from './utils/Controller';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { Notification, NOTIFICATION_TYPES } from '../websockets/Notification';
import { Trap } from '../database/entities/Trap/TrapModel';

export interface RequestInfo {
  httpSchema: 'https' | 'http';
  date: number;
  trapId: string;
  trapName: string;
  cookies: string;
  ip: string;
  method: string;
  query: string;
  params: object;
  url: string;
}

export class TrapController extends Controller {
  private async initTrap(): Promise<any> {
    const trapId = this.req.params.trap_id;

    return Trap.findOneAndUpdate(
      { id: trapId },
      {
        $setOnInsert: { id: trapId },
      },
      {
        new: true,
        upsert: true,
      },
    );
  }

  async proceed(): Promise<void> {
    const trap = await this.initTrap();

    const requestInfoParams = this.getRequestInfo(trap._id);

    const httpRequestInfo = new HttpRequestInfo(requestInfoParams);
    await httpRequestInfo.save();

    super.notify(new Notification(NOTIFICATION_TYPES.INCOMING_REQUEST, httpRequestInfo));

    this.res.status(200);
    this.res.end();
  }

  getRequestInfo(trapId: string): RequestInfo {
    const { cookies, ip, method, secure, query, params, url } = this.req;

    return {
      cookies,
      ip,
      method,
      query,
      params,
      url,
      httpSchema: secure ? 'https' : 'http',
      trapId,
      trapName: this.req.params.trap_id,
      date: Date.now(),
    };
  }
}
