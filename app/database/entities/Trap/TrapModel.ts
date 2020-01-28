import * as mongoose from 'mongoose';
import { TrapSchema } from './TrapSchema';

export interface TrapI {
  id: string;
}

export const Trap = mongoose.model('Trap', TrapSchema);
