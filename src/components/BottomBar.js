import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Typography} from '../styles';
import Icon from 'react-native-remix-icon';
import {Touchable} from '.';

const BottomBar = ({navigation, state, descriptors}) => {
  const getIconBasedOnRouteName = (routeName, color) => {
    if (routeName === 'PickADays') {
      return <Icon name="home-line" color={color} size={25} />;
    } else if (routeName === 'Summary') {
      return <Icon name="information-line" color={color} size={25} />;
    }
  };

  return (
    <>
      <View style={[styles.row]}>
        {[state.routes[0], {}, state.routes[1]].map((route, index) => {
          const isFocused =
            state.index === 0
              ? state.index === index
              : state.index === 1
              ? index === 2
              : false;
          const color = isFocused ? Colors.dark : Colors.tabBarInactive;
          //   const backgroundColor = 'red';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          if (index === 1) {
            return (
              <Touchable
                onPress={() => navigation.navigate('AddAPost')}
                style={styles.tabContainer}
                key={index.toString()}>
                <View style={styles.createTab}>
                  <Icon name="add-line" color={Colors.lightGreen} size={27} />
                </View>
                {/* <Text style={[{ color }]}>{label}</Text> */}
              </Touchable>
            );
          }
          return (
            <Touchable
              onPress={onPress}
              style={styles.tabContainer}
              key={index.toString()}>
              {getIconBasedOnRouteName(route.name, color)}
            </Touchable>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 5,
    height: 56,
  },
  flex1: {flex: 1},
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  createTab: {
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    position: 'absolute',
    bottom: 12,
  },
  touchableBox: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  label: {...Typography.normal12, marginTop: 5},
});
export default BottomBar;
