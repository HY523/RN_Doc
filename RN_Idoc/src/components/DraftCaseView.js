import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {AppColors} from '../constants'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {AppBackGroundColor, WhiteColor} = AppColors

export default class DraftCase extends Component {

  constructor (props) {
    super(props)

    this.state = {

    }
    console.log('color', AppColors)
  }

  render () {
    return (
      <View style={styles.Bg}>
        <View style={styles.contain}>

          <View style={styles.SkinImageView}>
            <Image source={require('../../assets/images/hand_m.png')} resizeMode={Image.resizeMode.contain} style={styles.SkinImage} />
          </View>

          <View style={styles.ContentView}>

            <View style={styles.SubmitBtnView}>
              <TouchableOpacity style={styles.SubmitBtn}>
                <Text style={styles.SubmitBtnTitle}>Submit case</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.DescriptionContainView}>
              <View style={{marginTop: ScreenHeight * 0.003}}>
                <Text style={styles.DescriptionTitle}>DESCRIPTION</Text>
              </View>

              <View style={{marginTop: ScreenHeight * 0.034}}>
                <Text style={styles.DescriptionContentTitle}>My hand started itching 1 week ago.</Text>
              </View>

              <TouchableOpacity style={{marginTop: ScreenHeight * 0.099, marginLeft: ScreenWidth * 0.675}}>
                <Text style={styles.DeleteTitle}>Delete Case</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    flex: 1,
    backgroundColor: WhiteColor,
    flexDirection: 'column',
  },

  contain: {
    flex: 1,
  },

  SkinImageView: {
    flex: 0.352,
    backgroundColor: WhiteColor,
    alignItems: 'center'
  },

  SkinImage: {
    width: ScreenWidth
  },

  ContentView: {
    flex: 0.648,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center'
  },

  SubmitBtnView: {
    marginTop: ScreenHeight * 0.0374,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SubmitBtn: {
    backgroundColor: AppBackGroundColor,
    width: ScreenWidth * 0.904,
    height: ScreenHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'center'
  },

  SubmitBtnTitle: {
    fontSize: 16,
    color: WhiteColor,
    fontFamily: 'Avenir',
    fontWeight: '500'
  },

  DescriptionContainView: {
    flex: 0.735,
    backgroundColor: WhiteColor,
    flexDirection: 'column',
    width: ScreenWidth * 0.936,
    marginTop: ScreenHeight * 0.021
  },

  DescriptionTitle: {
    fontSize: 16,
    fontFamily: 'Avenir'
  },

  DescriptionContentTitle: {
    fontSize: 14,
    fontFamily: 'Avenir'
  },

  DeleteTitle: {
    fontSize: 16,
    color: AppBackGroundColor,
    fontFamily: 'Avenir'
  },
})
