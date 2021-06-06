// Libs of watermelon
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import migrations from './migrations';
import User from '../models/User/userModel';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'watermelonExample',
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: error => {
    console.log(error);
  },
});

const database = new Database({
  adapter,
  modelClasses: [User],
  actionsEnabled: true,
});

export {database};
