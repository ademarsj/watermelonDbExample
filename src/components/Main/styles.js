import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: 18,
  },

  content: {
    display: 'flex',
    borderWidth: 6,
    padding: 10,
  },

  title: {
    fontSize: 35,
    marginBottom: 30,
  },

  inputContainer: {
    width: '80%',
    marginBottom: 30,
  },

  input: {
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 25,
    marginBottom: 5,
  },

  inputButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 50,
    borderRadius: 8,
  },

  inputButtonText: {
    fontSize: 30,
  },

  getButton: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
  },

  listStyle: {
    borderWidth: 2,
    width: '80%',
    padding: 8,
    borderRadius: 8,
  },

  udPanel: {
    width: '80%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  uButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 8,
    width: '50%',
  },
  dButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 50,
    borderRadius: 8,
    width: '50%',
  },
});

export default styles;
