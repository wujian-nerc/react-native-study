import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Navigator,
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Index from './pages/Index';
import Meituan from './pages/Meituan';
import XieCheng from './pages/XieCheng';
import Modal from './pages/Modal';
import UIComponents from './pages/UIComponents';
import Alert from './pages/Alert';

const MainStack = StackNavigator(
  {
    Index: Index,
    Meituan: Meituan,
    XieCheng: XieCheng,
    UIComponents: UIComponents,
    Alert: Alert,
  },
  {
    initialRouteName: 'Index',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: MainStack,
    Modal: Modal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
