import React, {Component} from 'react'
import {StyleSheet, Image, View, TouchableOpacity, Dimensions} from 'react-native'
import {AppColors} from '../constants'
import Camera from 'react-native-camera'
import Modal from 'react-native-modalbox'
import OverviewModal from './OverviewModalTip'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {BlackColor, TransparentColor} = AppColors

const CameraIcons = {
  camera_switch: require('../../assets/images/camera_switch.png'),
  camera_gallery: require('../../assets/images/Gallery.png'),
  camera_shut: require('../../assets/images/shut.png'),
  camera_flash: require('../../assets/images/Flash.png')
}

export default class TakeOverviewPhoto extends Component {

  constructor (props) {
    super(props)
    this.camera = null
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
      },
      isRecording: false
    }

    this.takePicture = this.takePicture.bind(this)
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
    console.log('QQQ')
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
        />
        <View style={styles.contain}>
          <View style={styles.CameraSwithView}>
            <Image />
            <TouchableOpacity style={styles.CameraSwithImageView}>
              <Image source={CameraIcons.camera_switch} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ToolBarView}>
          <TouchableOpacity>
            <Image source={CameraIcons.camera_gallery} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.takePicture}>
            <Image source={CameraIcons.camera_shut} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={CameraIcons.camera_flash} />
          </TouchableOpacity>
        </View>

        <Modal isOpen={this.state.isModalOpen} ref={'modal'} swipeToClose={false} backdropOpacity={0.8} style={styles.ModalTip}>
          <OverviewModal closeModal={this.closeModal.bind(this)} />
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

  ModalTip: {
    flex: 1,
    backgroundColor: TransparentColor,
    alignItems: 'center'
  }
})
