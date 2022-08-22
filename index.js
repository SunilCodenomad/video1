/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import REC_BAR_COL from './MBV-REC/MBV-REC-BAR_col'
import {name as appName} from './app.json';
// import REC_bar from './MBV-REC/MBV-REC-BAR';
import Record_Video from './MBV-REC/Record_Video'

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => REC_bar);
// AppRegistry.registerComponent(appName, () => REC_BAR_COL);
AppRegistry.registerComponent(appName, () => Record_Video );

