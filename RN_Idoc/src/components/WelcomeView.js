import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const modalHeight = ScreenHeight * 0.606
const modalWidth = ScreenWidth * 0.787

export default class Welcome extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  _onClick () {
    Actions.tabbar()
  }

  render () {
    return (

      <View style={styles.Bg}>

        <View style={styles.Contain}>

          <View style={styles.BorderView}>
            <View style={styles.AvatarView}>
              <Image source={require('../../assets/images/doctorAvatar.png')} resizeMode={Image.resizeMode.contain} style={styles.Avatar} />
            </View>

            <View style={styles.ContentView}>
              <View style={{alignItems: 'center', marginTop: -(ScreenHeight * 0.015)}}>
                <Text style={{fontSize: 30, color: '#40DDDD'}}>Welcome</Text>
              </View>

              <View style={styles.TextView}>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>Ask and receive a response</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>from our board cerfified</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>dermatologists in just hours.</Text>
                </View>
              </View>

              <View style={styles.TextView}>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>The average wait</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>see a dermatologist in</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>the US is 29 days.</Text>
                </View>
              </View>

              <View style={styles.swiperView}>
                <Image source={require('../../assets/images/swiper1.png')} resizeMode={Image.resizeMode.contain} style={styles.Swiper} />
              </View>
            </View>
          </View>

          <View style={styles.SkipButtonView}>
            <TouchableOpacity onPress={() => { this._onClick() }}>
              <Text style={styles.SkipButtonText}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  },

  Contain: {
    flex: 1
  },

  ContentView: {
    flexDirection: 'column',
  },

  AvatarView: {
    alignItems: 'center'
  },

  Avatar: {
    width: ScreenWidth * 0.235,
    height: ScreenHeight * 0.235,
    marginTop: -(ScreenHeight * 0.12),
  },

  BorderView: {
    width: modalWidth,
    height: modalHeight,
    borderColor: '#40DDDD',
    marginTop: ScreenHeight * 0.103,
    borderRadius: 7,
    marginLeft: (ScreenWidth - modalWidth) / 2,
    borderWidth: 3,
    flexDirection: 'column'
  },

  TextView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  Text: {
    fontSize: 17,
    //fontFamily: '../../assets/fonts/Avenir-Black.ttf',
  },

  swiperView: {
    alignItems: 'center',
    marginTop: 45
  },

  Swiper: {
    width: ScreenWidth * 0.0773,
    height: ScreenHeight * 0.0105
  },

  SkipButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ScreenHeight * 0.06
  },

  SkipButtonText: {
    fontSize: 14,
  }
})
