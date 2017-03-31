import React, {Component} from 'react'
import {StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native'
import {AppColors} from '../constants'
import Camera from 'react-native-camera'
import Modal from 'react-native-modalbox'
import CloseUpModal from './CloseUpModalTip'
import {Actions} from 'react-native-router-flux'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {BlackColor, TransparentColor} = AppColors

const CameraIcons = {
  camera_switch: require('../../assets/images/camera_switch.png'),
  camera_gallery: require('../../assets/images/Gallery.png'),
  camera_shut: require('../../assets/images/shut.png'),
  camera_flash: require('../../assets/images/Flash.png'),
  camera_flash_auto: require('../../assets1/ic_flash_auto_white.png')
}

export default class TakeCloseUpPhoto extends Component {

  constructor (props) {
    super(props)
    this.camera = null
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        type: Camera.constants.Type.back,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    }

    this.takePicture = this.takePicture.bind(this)
    this.switchCamera = this.switchCamera.bind(this)
    this.switchFlash = this.switchFlash.bind(this)
    this.galleryPicker = this.galleryPicker.bind(this)
  }

  componentDidMount () {
    if (this.props.openModal === 'Yes') {
      this.openModal.bind(this)()
    }
  }

  takePicture () {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err))
    }
  }

  switchCamera () {
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

  get typeIcon () {
    let icon
    const { back, front } = Camera.constants.Type

    if (this.state.camera.type === back) {
      icon = CameraIcons.camera_switch
    } else if (this.state.camera.type === front) {
      icon = CameraIcons.camera_flash_auto
    }

    return icon
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

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    })
  }

  get flashIcon () {
    let icon
    const { auto, on, off } = Camera.constants.FlashMode

    if (this.state.camera.flashMode === auto) {
      icon = require('../../assets1/ic_flash_auto_white.png')
    } else if (this.state.camera.flashMode === on) {
      icon = CameraIcons.camera_flash
    } else if (this.state.camera.flashMode === off) {
      icon = require('../../assets1/ic_flash_off_white.png')
    }

    return icon
  }

  galleryPicker () {console.log('ooo');
    Actions.cameraRollImagePicker()
  }

/*
 * Open Modal
 */
  openModal () {
    this.refs.modal.open()
  }
/*
 * Close Modal
 */
  closeModal () {
    this.setState({
      isModalOpen: false
    })
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
        <View style={styles.CameraSwithView}>
          <TouchableOpacity style={styles.CameraSwitchBtn} onPress={this.switchCamera} >
            <Image
              source={this.typeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ToolBarView}>
          <TouchableOpacity onPress={this.galleryPicker}>
            <Image source={CameraIcons.camera_gallery} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.takePicture}>
            <Image source={CameraIcons.camera_shut} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.switchFlash}>
            <Image
              source={this.flashIcon}
            />
          </TouchableOpacity>
        </View>

        <Modal isOpen={this.state.isModalOpen} ref={'modal'} swipeToClose={false} backdropOpacity={0.8} style={styles.ModalTip}>
          <CloseUpModal closeModal={this.closeModal.bind(this)} />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    flex: 1,
    flexDirection: 'column',
  },

  preview: {
    flex: 1,
    marginTop: ScreenHeight * 0.089
  },

  CameraSwithView: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'flex-end',
    top: 100
  },

  CameraSwitchBtn: {
    marginRight: ScreenWidth * 0.04,
  },

  ToolBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: BlackColor,
    alignItems: 'center',
    height: ScreenHeight * 0.127
  },

  ModalTip: {
    flex: 1,
    backgroundColor: TransparentColor,
    alignItems: 'center'
  }
})
