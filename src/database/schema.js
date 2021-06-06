import {appSchema} from '@nozbe/watermelondb';
import userSchema from '../models/User/userSchema';

export default appSchema({
  version: 1,
  tables: [userSchema],
});
