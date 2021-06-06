import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/database/';

AppRegistry.registerComponent(appName, () => App);
