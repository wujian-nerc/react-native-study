import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';

export default class AlertScreen extends Component {
  alertWithNoneButton() {
    Alert.alert('确定退出吗?');
  }

  alertWithOneButton() {
    Alert.alert(
      '温馨提醒',
      '确定退出吗?',
      [
        {text:'确定', onPress:() => ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)},
      ],
      { cancelable: false }
    )
  }

  alertWithTwoButtons() {
    Alert.alert(
      '温馨提醒',
      '确定退出吗?',
      [
        {text:'取消', onPress:() => ToastAndroid.show('你点击了取消~', ToastAndroid.SHORT)},
        {text:'确定', onPress:() => ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)},
      ]
    )
  }

  alertWithThreeButtons() {
    Alert.alert(
      '温馨提醒',
      '确定退出吗?',
      [
        {text:'稍后提醒我', onPress:() => ToastAndroid.show('你点击了稍后提醒我~', ToastAndroid.SHORT)},
        {text:'取消', onPress:() => ToastAndroid.show('你点击了取消~', ToastAndroid.SHORT)},
        {text:'确定', onPress:() => ToastAndroid.show('你点击了确定~', ToastAndroid.SHORT)},
      ]
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight style={styles.button} onPress={this.alertWithNoneButton}>
          <Text>alert</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.alertWithOneButton}>
          <Text>2-Button Alert</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.alertWithTwoButtons}>
          <Text>2-Button Alert</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.alertWithThreeButtons}>
          <Text>3-Button Alert</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 30
  }
});