import React, {Component} from 'react'
import {StyleSheet, Text, Dimensions, View, Image} from 'react-native'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

export default class HeaderBar extends Component {

  constructor (props) {
    super(props)

    this.state = {

    }
  }
  render () {
    return (
      <View style={styles.HeaderBarView}>
        <View style={styles.HeaderBar}>
          <View>
            <Image source={require('../../assets/images/Bitmap.png')} resizeMode={Image.resizeMode.contain} style={styles.Bitmap}
            />
          </View>
          <View style={styles.TitleView}>
            <Text style={styles.Title}>FIRST DERM</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  HeaderBarView: {
    backgroundColor: '#40DDDD',
    width: ScreenWidth,
    height: ScreenHeight * 0.139
  },

  HeaderBar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth
  },

  TitleView: {
    marginLeft: 10
  },

  Title: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Avenir Next'
  },

  Bitmap: {
    width: ScreenWidth * 0.0853,
    height: ScreenHeight * 0.0878,
  }
})
