import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'
import HeaderBar from './HeaderBar'
import AppColors from '../constants'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const WhiteColor = AppColors

export default class AddNewCaseTab extends Component {

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

          <View style={styles.ImageView}>
            <TouchableOpacity onPress={() => Actions.condition()}>
              <Image source={require('../../assets/images/add.png')} resizeMode={Image.resizeMode.contain} style={styles.AddImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.TextView}>
            <Text style={styles.Text}>Add a New Case</Text>
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

  ImageView: {
    marginTop: ScreenHeight * 0.219
  },

  AddImage: {
    width: ScreenWidth * 0.2,
    height: ScreenHeight * 0.112
  },

  TextView: {
    marginTop: ScreenHeight * 0.034
  },

  Text: {
    fontSize: 24
  }
})
