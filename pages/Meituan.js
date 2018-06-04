/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Meituan extends Component<Props> {
  static navigationOptions = {
    title: '美团外卖',
  };
  render() {
    return (
      <View>
        {/*part 1*/}
        <View style={[styles.row, styles.height160]}>
          <View style={[styles.part_1_left, styles.height160]}>
            <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>我们约吧</Text>
            <Text style={[styles.font12, styles.marTop14, styles.marLeft10, styles.black]}>恋爱家人好朋友</Text>
            <Image style={[styles.yue]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
          </View>
          <View style={[styles.part_1_right, styles.height160, styles.col]}>
            <View style={[styles.row, { flex: 1 }]}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.font14, styles.marTop18, styles.marLeft30, styles.red]}>超低价值</Text>
                <Text style={[styles.font12, styles.marTop14, styles.marLeft30, styles.black]}>十元惠生活</Text>
              </View>
              <View style={[{flex:1, marginTop: 13}]}>
                <Image style={styles.hanbao} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
              </View>
            </View>
            <View style={[styles.row, { borderTopWidth: 0.5, borderColor: '#DDD8CE' }]}>
              <View style={{flex:1, borderRightWidth:1, borderColor:'#DDD8CE',}}>
                <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>聚餐宴请</Text>
                <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>朋友家人常聚聚</Text>
                <Image style={{height:25,width:25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
              </View>
              <View style={{flex:1,}}>
                <Text style={[styles.font14,{color:'#FF8601', marginTop:8, marginLeft:5}]}>名店抢购</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>还有</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>12:06:12分</Text>
              </View>
            </View>
          </View>
        </View>

        {/*part 2*/}
        <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE', marginTop:40,height:65, flexDirection: 'row',paddingTop:10}}>
          <View style={[{flex:1}]}>
            <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'900', marginLeft:7}}>一元吃大餐</Text>
            <Text style={{marginLeft:7, fontSize:12, marginTop:3}}>新用户专享</Text>
          </View>
          <View style={{flex:1}}>
            <Image style={{height:50, width:120}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
          </View>
        </View>

        {/*part 3*/}
        <View>
          <View style={[styles.row]}>
            <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1, paddingTop: 14, flex: 1}]}>
              <View>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
              </View>
              <View>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}></Image>
              </View>
            </View>
            <View style={[styles.row, { flex: 1, paddingTop: 14, }]}>
              <View>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
              </View>
              <View>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
              </View>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1, paddingTop: 14,  marginLeft:1, flex: 1},]}>
              <View>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>0元餐来袭</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>免费吃喝玩乐购</Text>
              </View>
              <View>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}></Image>
              </View>
            </View>
            <View style={[styles.row, { flex: 1, paddingTop: 14, }]}>
              <View>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>热门团购</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>大家都在买什么</Text>
              </View>
              <View>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  font10: {
    fontSize: 10,
  },
  font12: {
    fontSize: 12,
  },
  font14: {
    fontSize: 14,
  },
  font15: {
    fontSize: 15,
  },
  font30: {
    fontSize: 30,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  marTop4: {
    marginTop: 4,
  },
  marTop13: {
    marginTop: 13,
  },
  marTop14: {
    marginTop: 14,
  },
  marTop18: {
    marginTop: 18,
  },
  marLeft5: {
    marginLeft: 5,
  },
  marLeft10: {
    marginLeft: 10,
  },
  marLeft30: {
    marginLeft: 30
  },
  yue: {
    height: 100,
  },
  hanbao: {
    height: 55,
    width: 55,
  },
  green: {
    color: 'green',
  },
  red:{
    color: '#FF3F0D',
    fontWeight: '900'
  },
  black: {
    color: 'black',
  },
  height160: {
    height: 160,
  },
  borderTop5: {
    borderTopWidth: 0.5,
  },
  borderRight5: {
    borderRightWidth: 0.5,
  },
  borderBottom5: {
    borderBottomWidth: 0.5,
  },
  borderLeft5: {
    borderLeftWidth: 0.5,
  },
  borderTop1: {
    borderTopWidth: 1,
  },
  borderRight1: {
    borderRightWidth: 1,
  },
  borderBottom1: {
    borderBottomWidth: 1,
  },
  borderLeft1: {
    borderLeftWidth: 1,
  },
  borderGrey: {
    borderColor: '#EDEBE6',
  },
  part_1_left: {
    flex: 1,
    borderColor: '#EDEBE6',
    borderRightWidth: 0.5,
    borderBottomWidth: 1,
  },
  part_1_right: {
    flex: 2,
    borderColor: '#EDEBE6',
    borderBottomWidth: 1,
  },
  part_1_right_block: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EDEBE6',
  },
  part_2_block: {    
    flex: 1,
    borderWidth: 1,
    borderColor: '#EDEBE6',
  },
  part_3_block: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EDEBE6',
  },
});
