import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';
import ItemUser from '../ItemUser';
import styles from './styles';
import UserController from '../../controllers/UserController';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('C');
  const [selectedId, setSelectedId] = useState(null);
  const userController = new UserController();

  async function handleCreate() {
    if (action === 'C') {
      await userController.create({username, password});
    } else {
      const listUsers = users.map(item => {
        delete item._raw.isSelected;
        return item;
      });
      setUsers(listUsers);

      await userController.update({username, password}, selectedId);
    }
    setAction('C');
    await handleGet();
  }

  async function handleGet() {
    let listUsers = await userController.getAll();
    // Discussion #1061 on github Nozbe/WatermelonDB

    //Even using spread operator modifying the objects cause errors
    //forward because apparently the connection doesnt end, so making this
    //below when you do a find() one user they come with "isSelected"
    //and you will get a error when updating
    // listUsers = listUsers.map(item => ({
    //   ...item,
    //   isSelected: false,
    // }));

    setUsers(listUsers);
  }

  async function handleUpdate() {
    if (users.length > 0) {
      const user = users.filter(item => item._raw.id === selectedId);
      setUsername(user[0]._raw.username);
      setPassword(user[0]._raw.password);
      setSelectedId(user[0]._raw.id);
      setAction('E');
    }
  }

  async function handleDelete() {
    await userController.delete(selectedId);
    await handleGet();
  }

  function handleSelect(index) {
    setSelectedId(users[index]._raw.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Watermelon DB</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={newText => {
            setUsername(newText);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={newText => {
            setPassword(newText);
          }}
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => handleCreate()}>
          <Text style={styles.inputButtonText}>
            {action === 'C' ? 'Create' : 'Edit'} User
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.udPanel}>
        <TouchableOpacity style={styles.uButton} onPress={() => handleUpdate()}>
          <Text style={styles.inputButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dButton} onPress={() => handleDelete()}>
          <Text style={styles.inputButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.getButton} onPress={() => handleGet()}>
        <Text style={styles.inputButtonText}>Get User</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.listStyle}
        data={users}
        keyExtractor={itens => itens.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ItemUser
            user={item._raw}
            isSelected={selectedId === item._raw.id}
            index={index}
            keyExtractor={item => item._raw_id.toString()}
            handleSelect={() => handleSelect(index)}
          />
        )}
      />
    </View>
  );
};

export default Main;
