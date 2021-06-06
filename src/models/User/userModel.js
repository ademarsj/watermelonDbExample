import {Model} from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = 'users';
  //preferences-> settings -> experimental Settings enable js experimentalDecorators
  //to avoid the warning
  @field('username') username;
  @field('password') password;
}
