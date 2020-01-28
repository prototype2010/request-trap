import * as mongoose from 'mongoose';

const trapSchema = {
  id: Number,
};

export type TrapSchema = typeof trapSchema;

const TrapSchema = new mongoose.Schema(trapSchema);

export const Trap = mongoose.model('TrapSchema', TrapSchema);
