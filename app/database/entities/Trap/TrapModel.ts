import * as mongoose from 'mongoose';
import { TrapSchema } from './TrapSchema';

export const Trap = mongoose.model('Trap', TrapSchema);
