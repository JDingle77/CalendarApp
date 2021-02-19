import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>2021</Text>
      </View>
      <View style={styles.mcontainer}>
        <Text style={styles.month}>Jan</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
  },
  ycontainer: {
    flex: 3,
    backgroundColor: '#000',
    marginTop: 50,
    marginLeft: 20
  },
  year: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
  },
  month: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  mcontainer: {
    flex: 30,
    backgroundColor: '#000',
    marginLeft: 20
  }
});
