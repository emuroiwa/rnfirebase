import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SafeAreaView from 'react-native-safe-area-view';

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.itemsList}>
            {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                <Text style={styles.itemtext}>{item.name}</Text>
                </View>
            );
            })}
        </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});