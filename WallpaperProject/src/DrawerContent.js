import React, {useState} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerForm,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Pragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {stringLiteral} from '@babel/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {set} from 'react-native-reanimated';

export function DrawerContent(props) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <View style={styles.DrawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.userrInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://www.seekpng.com/png/detail/149-1492949_my-top-cute-pokemon.png',
                }}
                size={50}></Avatar.Image>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title styles={styles.title}>Wallpaper App</Title>
                <Caption style={styles.Caption}>@Wallpaper</Caption>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                )}
                label="ScreenList"
                onPress={() => {
                  props.navigation.navigate('ScreenList');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="information-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="test"
                onPress={() => {
                  props.navigation.navigate('test');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="folder-table-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="TestContainer"
                onPress={() => {
                  props.navigation.navigate('TestContainer');
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={darkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
            <Drawer.Section title="App">
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                )}
                label="Rate Us"
                onPress={() => {
                  props.navigation.navigate('Rate');
                }}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="copyright"
              color={color}
              size={size}
            />
          )}
          label="Made By Uneeb"
          onPress={() => Linking.openURL('http://google.com')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  userrInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
