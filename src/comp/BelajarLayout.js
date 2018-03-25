import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Header</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
  },
  box1: {
    backgroundColor: 'green',
    flex: 1,
  },
  box2: {
    backgroundColor: 'yellow',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    backgroundColor: 'red',
    flex: 2,
  },
  box4: {
    backgroundColor: 'blue',
    flex: 1,
  },
  text: {
    fontSize: 12,
    fontWeight:	'bold',
  }
});
