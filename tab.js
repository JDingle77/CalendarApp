import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TaskInput from './TextInput.js';
 
function Home({ navigation }) {
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
       <View style={styles.mcol}>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Jan"
                 onPress={() => navigation.navigate('January')}
                 color="white"
               />
             </View>
             <Image
               style={styles.janoct}
               source={require('./images/JanOct.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Feb"
                 onPress={() => navigation.navigate('February')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Feb.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Mar"
                 onPress={() => navigation.navigate('Current Month')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/March.jpg')}
               />
           </View>
         </View>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Apr"
                 onPress={() => navigation.navigate('April')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Apr.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="May"
                 onPress={() => navigation.navigate('May')}
                 color="white"
               />
             </View>
             <Image
               style={styles.janoct}
               source={require('./images/May.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Jun"
                 onPress={() => navigation.navigate('June')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Jun.jpg')}
               />
           </View>
         </View>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Jul"
                 onPress={() => navigation.navigate('July')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Jul.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Aug"
                 onPress={() => navigation.navigate('August')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Aug.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Sep"
                 onPress={() => navigation.navigate('September')}
                 color="white"
               />
             </View>
             <Image
               style={styles.sep}
               source={require('./images/Sep.jpg')}
               />
           </View>
         </View>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Oct"
                 onPress={() => navigation.navigate('October')}
                 color="white"
               />
             </View>
             <Image
               style={styles.janoct}
               source={require('./images/JanOct.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Nov"
                 onPress={() => navigation.navigate('November')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Nov.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={styles.mbutton}>
               <Button
                 title="Dec"
                 onPress={() => navigation.navigate('December')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/Dec.jpg')}
               />
           </View>
         </View>
       </View>
     </SafeAreaView>
   );
}
 
function Tasks() {
   return (
     <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
       <View style={styles.tcol}>
         <View style={styles.trow}>
           <TaskInput />
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•BBALL</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•COMPSCI</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•DEVOS</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•GRIP</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•HEALTHY</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•MUSIC</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•PULL-UPS</Text>
         </View>
         <View style={styles.trow}>
           <Text style = {styles.month}>•SKINCARE</Text>
         </View>
       </View>
     </SafeAreaView>
   );
}
 
function CurrentMonth({ navigation }) {
   return (
     <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
       <View style={styles.ycontainer} >
         <Text style={styles.year}>March</Text>
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
       <View style={styles.ccol}>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={{ width:100, height:34 }}>
               <Button
                 title="BBALL"
                 onPress={() => navigation.navigate('Basketball')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="COMPSCI"
                 onPress={() => navigation.navigate('CompSci')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="DEVOS"
                 onPress={() => navigation.navigate('Devos')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
         </View>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="GRIP"
                 onPress={() => navigation.navigate('Grip')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="HEALTHY"
                 onPress={() => navigation.navigate('Healthy')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="MUSIC"
                 onPress={() => navigation.navigate('Music')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
         </View>
         <View style={styles.mrow}>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="PULL-UPS"
                 onPress={() => navigation.navigate('PullUps')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
           <View style={styles.mcontainer}>
             <View style={{ width: 100, height: 34 }}>
               <Button
                 title="SKINCARE"
                 onPress={() => navigation.navigate('Skincare')}
                 color="white"
               />
             </View>
             <Image
               style={styles.mimage}
               source={require('./images/IMG_3037.jpg')}
               />
           </View>
         </View>
       </View>
     </SafeAreaView>
   );
}

function Basketball() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Basketball</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function CompSci() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>CompSci</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function Devos() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Devos</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function Grip() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Grip</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function Healthy() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Healthy</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function Music() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Music</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function PullUps() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Pull-Ups</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function Skincare() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>Skincare</Text>
      </View>
      <View style ={styles.line}>
        <Image
          style={{
            width:370,
            height:50
          }}
          source={require('./images/IMG_3005.jpg')}
          />
      </View>
      <View style={styles.taskContainer}>
        <Image 
          style={{
            width: 370,
            height: 269
          }}
          source={require('./images/IMG_3037.jpg')}
          />
      </View>
    </SafeAreaView>
  );
}

function January() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>January</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function February() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>February</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Feb.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function April() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>April</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Apr.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function May() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>May</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.janoct}
              source={require('./images/May.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function June() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>June</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jun.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function July() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>July</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Jul.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function August() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>August</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Aug.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function September() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>September</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.sep}
              source={require('./images/Sep.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function October() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>October</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.janoct}
              source={require('./images/JanOct.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function November() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>November</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Nov.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function December() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ycontainer} >
        <Text style={styles.year}>December</Text>
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
      <View style={styles.ccol}>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>BBALL</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>COMPSCI</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>DEVOS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>GRIP</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>HEALTHY</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>MUSIC</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
        </View>
        <View style={styles.mrow}>
          <View style={styles.mcontainer}>
            <Text style={styles.task}>PULL-UPS</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
          <View style={styles.mcontainer}>
            <Text style = {styles.task}>SKINCARE</Text>
            <Image
              style={styles.mimage}
              source={require('./images/Dec.jpg')}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();
 
function MyStack() {
 return (
   <Stack.Navigator>
     <Stack.Screen
       name="Home"
       component={Home}
     />
     <Stack.Screen
       name="Current Month"
       component={CurrentMonth}
     />
     <Stack.Screen
       name="January"
       component={January}
     />
     <Stack.Screen
       name="February"
       component={February}
     />
     <Stack.Screen
       name="April"
       component={April}
     />
     <Stack.Screen
       name="May"
       component={May}
     />
     <Stack.Screen
       name="June"
       component={June}
     />
     <Stack.Screen
       name="July"
       component={July}
     />
     <Stack.Screen
       name="August"
       component={August}
     />
     <Stack.Screen
       name="September"
       component={September}
     />
     <Stack.Screen
       name="October"
       component={October}
     />
     <Stack.Screen
       name="November"
       component={November}
     />
     <Stack.Screen
       name="December"
       component={December}
     />
     <Stack.Screen
       name="Basketball"
       component={Basketball}
     />
     <Stack.Screen
       name="CompSci"
       component={CompSci}
     />
     <Stack.Screen
       name="Devos"
       component={Devos}
     />
     <Stack.Screen
       name="Grip"
       component={Grip}
     />
     <Stack.Screen
       name="Healthy"
       component={Healthy}
     />
     <Stack.Screen
       name="Music"
       component={Music}
     />
     <Stack.Screen
       name="PullUps"
       component={PullUps}
     />
     <Stack.Screen
       name="Skincare"
       component={Skincare}
     />
   </Stack.Navigator>
 );
}
 
function CurStack() {
   return (
    <Stack.Navigator>
      <Stack.Screen
       name="Current Month"
       component={CurrentMonth}
       />
      <Stack.Screen
       name="Basketball"
       component={Basketball}
       />
      <Stack.Screen
       name="CompSci"
       component={CompSci}
       />
      <Stack.Screen
       name="Devos"
       component={Devos}
       />
      <Stack.Screen
       name="Grip"
       component={Grip}
       />
      <Stack.Screen
       name="Healthy"
       component={Healthy}
       />
      <Stack.Screen
       name="Music"
       component={Music}
       />
      <Stack.Screen
       name="PullUps"
       component={PullUps}
       />
     <Stack.Screen
       name="Skincare"
       component={Skincare}
       />
    </Stack.Navigator>
   );
}

const Tab = createBottomTabNavigator();
 
function MyTabs() {
   return (
       <Tab.Navigator>
           <Tab.Screen
               name="Home"
               component={MyStack}
           />
           <Tab.Screen
               name="Tasks"
               component={Tasks}
           />
           <Tab.Screen
               name="Current Month"
               component={CurStack}
           />
       </Tab.Navigator>
   );
}
 
export default MyTabs;
 
const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: '#000'
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
     height: 125,
     justifyContent: 'space-evenly',
   },
   mbutton: {
     width: 50,
     height: 45,
   },
   mrow: {
     flexDirection: 'row',
     backgroundColor: '#000',
     alignItems: 'center',
     justifyContent: 'flex-start'
   },
   mcol: {
     flex: 30,
     backgroundColor: '#000',
     justifyContent: 'flex-start',
   },
   tcol: {
     flex: 1,
     backgroundColor: '#000',
     justifyContent: 'space-evenly',
   },
   trow: {
     flexDirection: 'row',
     backgroundColor: '#000',
     alignItems: 'center',
     justifyContent: 'center'
   },
   ccol: {
     flex: 30,
     backgroundColor: '#000',
     justifyContent: 'space-evenly',
   },
   taskContainer: {
     flex: 30,
     alignItems: 'center',
     justifyContent: 'center'
   },
   task: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 15
   },
   janoct: {
     width: 100,
     height: 85
   },
   mimage: {
     width: 100,
     height: 72
   },
   sep: {
      width: 100,
      height: 73
   },
   image: {
     flex: 1,
     backgroundColor: '#0f0'
   }
 });
 
