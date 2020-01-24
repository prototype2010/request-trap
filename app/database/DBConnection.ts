import mongoose from 'mongoose';

(async function() {

  await new Promise((res,rej) =>{



  });

  console.log('COnnecting ? ')
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('connected ? ')
  });
})();

export class DBConnection {
  private static readonly instance = mongoose.connection;
  private constructor() {}

  public static getInstance() {
    return this.instance;
  }
}
