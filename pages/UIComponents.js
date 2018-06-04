import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  DrawerLayoutAndroid,
  FlatList,
  Modal,
  TouchableHighlight,
  Picker,
  ProgressBarAndroid,
  TouchableWithoutFeedback,
  RefreshControl,
  Switch,
  TextInput,
  ToolbarAndroid,
  TouchableOpacity,
  Image,
  ViewPagerAndroid,
} from 'react-native';


class Row extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick(this.props.data);
  }
  render() {
    return (
     <TouchableWithoutFeedback onPress={this._onClick} >
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class UIComponents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(4)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0})
      ),
      open: false,
    };
    this._onClick = this._onClick.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.setSwitchValue = this.setSwitchValue.bind(this);
  }

  _onClick(row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setSwitchValue(value) {
    this.setState({ open: value })
  }

  onActionSelected(position) {
    if (position === 0) {
      alert('Settings');
    }
  }

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick}/>;
    });

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }>
        {rows}

        <ToolbarAndroid
            logo={require('../static/spiro.png')}
            title="AwesomeApp"
            actions={[{title: 'Settings', icon: require('../static/spiro.png'), show: 'always'}]}
            onActionSelected={this.onActionSelected} />

        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator animating={false} size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#0000ff" />
          
          <Button
            onPress={() => alert('This is a button!')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          
          <DrawerLayoutAndroid
            style={{height: 100}}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            </View>
          </DrawerLayoutAndroid>
          
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => alert("Modal has been closed.")}
          >
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>

          <Picker
            prompt="prompt"
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <ProgressBarAndroid styleAttr="Inverse" />

          <Switch value={this.state.open} onValueChange={this.setSwitchValue} />

          <TextInput autoCapitalize="words" editable={false} />

          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={styles.button}
              source={require('../static/spiro.png')}
            />
          </TouchableOpacity>

          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
            <View style={styles.pageStyle}>
              <Text>First page</Text>
            </View>
            <View style={styles.pageStyle}>
              <Text>Second page</Text>
            </View>
          </ViewPagerAndroid>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  },
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
})