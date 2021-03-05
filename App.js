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
      <View style ={styles.line}>
        {/* Take image source from local machine */}
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
          <View style={styles.mcontainer}>
            <Text style={styles.month}>Jan</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Feb</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Mar</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.mcontainer}>
            <Text style={styles.month}>Apr</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>May</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Jun</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.mcontainer}>
            <Text style={styles.month}>Jul</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Aug</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Sep</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.mcontainer}>
            <Text style={styles.month}>Oct</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Nov</Text>
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.month}>Dec</Text>
          </View>
        </View>
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
    flex: 2,
    backgroundColor: '#000',
    marginTop: 50,
    marginLeft: 20,
  },
  line: {
    flex: 1,
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
    backgroundColor: '#000',
    marginLeft: 20,
    width: 100,
    height: 125
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  col: {
    flex: 30,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});
