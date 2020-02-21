import * as mongoose from 'mongoose';

const TrapModel = new mongoose.Schema({
  id: String,
});

export const Trap = mongoose.model('Trap', TrapModel);
