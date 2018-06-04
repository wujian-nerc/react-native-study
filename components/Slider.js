import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

const slideImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

export default class Slider extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showButtons={false}
        autoplay={true}
        height={150}
        showPagination={false}
      >
        <Image style={[styles.slide]} source={{uri: slideImgs[0]}} />
        <Image style={[styles.slide]} source={{uri: slideImgs[1]}} />
        <Image style={[styles.slide]} source={{uri: slideImgs[2]}} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height:80,
  },
  slide: {
    height:80,
    resizeMode: Image.resizeMode.contain,
  },
});
