import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import HeaderBar from './HeaderBar'
import AppColors from '../constants'

const ScreenHeight = Dimensions.get('window').height
const WhiteColor = AppColors

export default class MoreTab extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.Bg}>
        <HeaderBar />
        <View style={styles.Contain}>
          <View style={styles.TextView}>
            <Text style={styles.Text}>Here is a MoreView.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    backgroundColor: WhiteColor,
    flex: 1,
    flexDirection: 'column'
  },

  Contain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  TextView: {
    marginTop: ScreenHeight * 0.034
  },

  Text: {
    fontSize: 24
  }
})
