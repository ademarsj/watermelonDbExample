import {database} from '../database';

// https://nozbe.github.io/WatermelonDB/Actions.html
// to use the controller inside the model

class UserController {
  async create(usr) {
    await database.action(async () => {
      //Receive a new empty object and in the callback you fill him
      await this.collection.create(user => {
        user.username = usr.username;
        user.password = usr.password;
      });
    });
  }

  async update(usr, id) {
    await database.action(async () => {
      const user = await this.collection.find(id);
      await user.update(userMod => {
        userMod.username = usr.username;
        userMod.password = usr.password;
      });
    });
  }

  async delete(id) {
    await database.action(async () => {
      const user = await this.collection.find(id);
      user.destroyPermanently(); //considering you dont sync using the
      //functions of watermelon
      //user.markAsDeleted(); used when sync with remote db using watermelon
      //features
    });
  }

  async getAll() {
    const users = await this.collection.query().fetch();
    return users;
  }

  constructor() {
    this.collection = database.collections.get('users');
    //or database.get('users');
  }
}

export default UserController;
