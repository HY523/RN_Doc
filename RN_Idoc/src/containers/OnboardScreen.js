import React, {Component} from 'react'
import {View} from 'react-native'
import HeaderBar from '../components/HeaderBar'
import Welcome from '../components/WelcomeView'
import PirvacyPolicy from '../components/PrivacyPolicyView'
import Price from '../components/PriceView'
import Swiper from 'react-native-swiper'

export default class OnboardScreen extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <View>
        <HeaderBar />
        <Swiper loop={false}>
          <Welcome />
          <PirvacyPolicy />
          <Price />
        </Swiper>
      </View>
    )
  }
}
