import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {AppColors} from '../constants'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {TransparentColor, BlackColor} = AppColors
const TipModalViewWidth = ScreenWidth * 0.885
const TipModalViewHeight = ScreenHeight * 0.494

export default class CloseUpModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.Bg}>
        <View style={styles.CameraTipView}>
          <View style={styles.CameraTipImageView}>
            <Image source={require('../../assets/images/close_up_tip.png')} />
            <View style={styles.InstructionTextView}>
              <Text style={styles.InstructionText}>Now hold ~4 inches (10 cm) a way from affected area.</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.props.closeModal} style={styles.CloseBtnView}>
            <Image source={require('../../assets/images/close_opacity.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: TransparentColor
  },

  CameraTipView: {
    backgroundColor: TransparentColor,
    width: TipModalViewWidth,
    height: TipModalViewHeight,
    marginTop: ScreenHeight * 0.256,
    flexDirection: 'column',
    opacity: 1,
    alignItems: 'center'
  },

  CameraTipImageView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: ScreenWidth * 0.867,
    height: ScreenHeight * 0.487
  },

  InstructionTextView: {
    top: -ScreenHeight * 0.082,
    width: ScreenWidth * 0.771,
    height: ScreenHeight * 0.051,
    backgroundColor: TransparentColor
  },

  InstructionText: {
    fontSize: 14,
    color: BlackColor,
    textAlign: 'center'
  },

  CloseBtnView: {
    top: -ScreenHeight * 0.494,
    marginLeft: ScreenWidth * 0.8
  },

  CloseBtnImage: {
    width: 33,
    height: 33,
    alignItems: 'flex-end',
    flexDirection: 'column'
  }
})
