/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {useState, useEffect} from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 import {DrawerContent} from './src/DrawerContent';
 
 import ScreenList from './src/Screens/ScreenList';
 import test from './src/Screens/test';
 import TestContainer from './src/Screens/testingcontainer';
 import Download from './src/Screens/download';
 import Category from './src/Screens/Category';
 import Rate from './src/Screens/Rate';
 import ShareExample from './src/Screens/share';
 import Header from './src/Screens/Header';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   ImageBackground,
   Share,
 } from 'react-native';
 
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

 
 const App = () => {
 
   return (
     <>
 
       <NavigationContainer>
 
         {/* <View style={styles.container}>
             <Stack.Navigator initialRouteName="Category">
               <Stack.Screen name="ScreenList" component={ScreenList} />
               <Stack.Screen name="test" component={test} />
               <Stack.Screen name="TestContainer" component={TestContainer} />
               <Stack.Screen name="download" component={Download} />
               <Stack.Screen name="Category" component={Category} />
             </Stack.Navigator>
           </View> */}
         {/* <View style={styles.container}> */}
         <Drawer.Navigator
           drawerContent={(props) => <DrawerContent {...props} />}>
             
           <Drawer.Screen
             name="ScreenList"
             component={ScreenList}
             options={{headerShown: false}}
           />
           <Drawer.Screen name="download" component={Download} />
           <Drawer.Screen
             name="test"
             component={test}
             options={{headerShown: false}}
           />
           <Drawer.Screen
             name="TestContainer"
             component={TestContainer}
             options={{headerShown: false}}
           />
           <Drawer.Screen
             name="Category"
             component={Category}
             options={{headerShown: false}}
           />
           <Drawer.Screen
             name="Rate"
             component={Rate}
             options={{headerShown: false}}
           />
           <Drawer.Screen
             name="share"
             component={ShareExample}
             options={{headerShown: false}}
           />
           <Drawer.Screen
             name="Header"
             component={Header}
             options={{headerShown: false}}
           />
         </Drawer.Navigator>
         {/* </View> */}
       </NavigationContainer>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 
 export default App;
 