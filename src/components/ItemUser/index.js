import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ItemUser = ({user, index, handleSelect, isSelected}) => {
  return (
    <TouchableOpacity
      style={styles({isSelected}).container}
      onPress={() => handleSelect()}>
      <Text style={styles().indexText}>Index: {index}</Text>
      <View style={styles().userInfo}>
        <Text style={styles().userInfoText}>{user.username}</Text>
        <Text style={styles().userInfoText}>{user.password}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemUser;
