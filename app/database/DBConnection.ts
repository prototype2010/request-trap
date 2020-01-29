import mongoose from 'mongoose';

export class DBConnection {
  private constructor() {}

  public static async connect() {
    await new Promise<void>((res, rej) => {
      mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

      const db = mongoose.connection;
      db.on('error', e => rej(e));
      db.once('open', () => res);
    });
  }
}
