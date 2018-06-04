/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import LogoTitle from '../components/LogoTitle';

type Props = {};
export default class Index extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={params.increaseCount}
          title="+1"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Info"
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

   _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>首页</Text>
        <Text>{this.state.count}</Text>
        <Button
          title="美团外卖"
          onPress={() => navigation.push('Meituan')}
        />
        <Button
          title="携程旅行"
          onPress={() => navigation.push('XieCheng')}
        />
        <Button
          title="Alert"
          onPress={() => navigation.push('Alert')}
        />
        <Button
          title="UIComponents"
          onPress={() => navigation.push('UIComponents')}
        />
      </View>
    );
  }
}
