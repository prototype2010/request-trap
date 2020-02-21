import { Controller } from './utils/Controller';

export class HomePageController extends Controller {
  index(): void {
    return this.res.render('index');
  }
}
