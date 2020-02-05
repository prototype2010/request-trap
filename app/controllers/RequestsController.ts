import { Controller } from './utils/Controller';
import { HttpRequestInfo } from '../database/entities/Request/HttpRequestInfoModel';
import { Trap } from '../database/entities/Trap/TrapModel';

export class RequestsController extends Controller {
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

  async index(): Promise<void> {
    const { _id } = await this.initTrap();

    const trappedRequests = await HttpRequestInfo.find({ trapId: _id });

    this.res.render('requests', { requests: trappedRequests });
  }
}
