import {StyleSheet} from 'react-native';

const styles = ({...props}) => {
  return StyleSheet.create({
    indexText: {
      fontSize: 20,
    },
    container: {
      borderWidth: props.isSelected ? 5 : 2,
      borderRadius: 8,
      marginBottom: 2,
      height: 70,
      padding: 3,
      borderColor: props.isSelected ? 'green' : 'black',
    },

    userInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    userInfoText: {
      fontSize: 22,
      paddingHorizontal: 15,
    },
  });
};

export default styles;
