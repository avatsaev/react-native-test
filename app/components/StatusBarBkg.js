//@flow


'use strict'

import React, {Component} from 'react'

import {
  StyleSheet,
  View
} from 'react-native';


class StatusBarBkg extends Component{



  render(){
    return (
      <View style={styles.statusBarBkg}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarBkg:{
    height: 20
  }
})


module.exports = StatusBarBkg
