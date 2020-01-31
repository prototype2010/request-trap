import mongoose from 'mongoose';
import { DB_NAME } from '../../config';

export class DBConnection {
  private constructor() {}

  public static async connect() {
    await new Promise<void>((res, rej) => {
      mongoose.connect(`mongodb://localhost/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

      const db = mongoose.connection;
      db.on('error', e => rej(e));
      db.once('open', res);
    });
  }
}
