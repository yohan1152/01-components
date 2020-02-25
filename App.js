import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.box1}>
          <Text style={styles.text}>Vista 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Vista 2</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.box3}>
          <Text style={styles.text}>Vista 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Vista 4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  container1: {
    flex: 1,
    flexDirection: 'row'
  },
  container2: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    color: '#ff1744'
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffc107'
  },
  box2: {
    flex: 1,
    backgroundColor: '#0d47a1'
  },
  box3: {
    flex: 1,
    backgroundColor: '#d50000'
  },
  box4: {
    flex: 1,
    backgroundColor: '#49D79D'
  }
});
