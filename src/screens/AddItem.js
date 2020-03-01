import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class AddItem extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Add Item</Text>
        </View>
      </SafeAreaView>
    );
  }
}