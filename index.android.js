// @flow


import React, { Component } from 'react';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import ViewContainer from './app/components/ViewContainer'
import StatusBarBkg from './app/components/StatusBarBkg'

class AwesomeProject extends Component {
  render(){
    return (

      <ViewContainer>
        <StatusBarBkg />
        <Text> Hello World </Text>
      </ViewContainer>

    )

  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
