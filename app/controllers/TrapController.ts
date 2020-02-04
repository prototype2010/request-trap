import { Controller } from './utils/Controller';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { RequestFactory } from '../database/entities/Request/RequestFactory';
import { Notification, NOTIFICATION_TYPES } from '../websockets/Notification';
import { Trap } from '../database/entities/Trap/TrapModel';

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

    const requestInfoParams = RequestFactory.create(this.req, trap._id);

    const httpRequestInfo = new HttpRequestInfo(requestInfoParams);
    await httpRequestInfo.save();

    super.notify(new Notification(NOTIFICATION_TYPES.INCOMING_REQUEST, httpRequestInfo));

    this.res.status(200);
    this.res.end();
  }
}
