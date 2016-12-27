// DaShan.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DaShan extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#333' }}>欢迎来到大山~</Text>
      </View>
    )
  }
}
