import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import Gradient from 'react-native-linear-gradient';
import {Colors, Typography} from '../styles';
import moment from 'moment';

const Post = ({
  uri = '',
  temperature = 0,
  date = Date.now(),
  location = 'Kochi, India',
}) => {
  const gradient = [
    Colors.semiTransparent,
    Colors.transparent,
    Colors.transparent,
    Colors.transparent,
  ];

  const GradientComponent = ({children, angle}) => (
    <Gradient colors={gradient} useAngle angle={angle} style={styles.container}>
      {children}
    </Gradient>
  );

  return (
    <ImageBackground
      source={{
        uri,
      }}
      style={styles.container}>
      <GradientComponent angle={360}>
        <GradientComponent angle={90}>
          <View style={styles.dateBox}>
            <Text style={Typography.bold14White}>
              {moment(date).format('MMM')}
            </Text>
            <Text style={Typography.bold24White}>
              {moment(date).format('DD')}
            </Text>
          </View>

          <View style={styles.locationBox}>
            <Icon name="map-pin-3-line" color={Colors.WHITE} size={12} />
            <Text style={styles.locationText}>{location}</Text>
          </View>

          <View style={styles.temperatureBox}>
            <Text style={styles.temperatureText}>{temperature}˚</Text>
            <Icon name="sun-line" color={Colors.WHITE} size={12} />
          </View>
        </GradientComponent>
      </GradientComponent>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: 185},
  dateBox: {
    left: 10,
    top: 10,
    alignItems: 'center',
    width: '10%',
    position: 'absolute',
  },
  locationBox: {
    left: 15,
    bottom: 12,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
  locationText: {marginLeft: 5, ...Typography.normal12White},
  temperatureText: {marginRight: 5, ...Typography.bold12White},
  temperatureBox: {
    right: 15,
    bottom: 12,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
});

export default Post;
