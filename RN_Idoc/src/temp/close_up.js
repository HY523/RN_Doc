import React, {Component} from 'react'
import {StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native'
import {AppColors} from '../constants'
import Camera from 'react-native-camera'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {BlackColor} = AppColors

const CameraIcons = {
  camera_switch: require('../../assets/images/camera_switch.png'),
  camera_gallery: require('../../assets/images/Gallery.png'),
  camera_shut: require('../../assets/images/shut.png'),
  camera_flash: require('../../assets/images/Flash.png')
}

export default class TakeCloseUpPhoto extends Component {

  constructor (props) {
    super(props)
    this.camera = null
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    }

    this.takePicture = this.takePicture.bind(this)
    this.switchType = this.switchType.bind(this)
    this.switchFlash = this.switchFlash.bind(this)
  }

  takePicture () {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err))
    }
  }

  switchType () {
    let newType
    const { back, front } = Camera.constants.Type

    if (this.state.camera.type === back) {
      newType = front
    } else if (this.state.camera.type === front) {
      newType = back
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    })
  }

  switchFlash () {
    let newFlashMode
    const { auto, on, off } = Camera.constants.FlashMode

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto
    }
  }

  render () {
    return (
      <View style={styles.Bg}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          defaultTouchToFocus
          mirrorImage={false}
        />
        <View style={styles.contain}>
          <View style={styles.CameraSwithView}>
            <Image />
            <TouchableOpacity onPress={this.switchType} style={styles.CameraSwithImageView}>
              <Image source={CameraIcons.camera_switch} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ToolBarView}>
          <TouchableOpacity >
            <Image source={CameraIcons.camera_gallery} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.takePicture}>
            <Image source={CameraIcons.camera_shut} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.switchFlash}>
            <Image source={CameraIcons.camera_flash} />
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
  },

  contain: {
    flex: 1,
    marginTop: ScreenHeight * 0.1
  },

  CameraSwithView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CameraSwithImageView: {
    width: ScreenWidth * 0.175,
    height: ScreenHeight * 0.048,
    marginRight: ScreenWidth * 0.04,
    marginTop: ScreenHeight * 0.015
  },

  ToolBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: BlackColor,
    alignItems: 'center',
    height: ScreenHeight * 0.127
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
