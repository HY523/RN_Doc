import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Router, Scene, ActionConst} from 'react-native-router-flux'
import OnboardScreen from './OnboardScreen'
import TabIcon from '../components/TabIcon'
import PrivacyPolicyModal from '../components/PrivacyPolicyModalView'
import Home from '../containers/HomeView'
import AddNewCaseTab from '../components/AddNewCaseView'
import MoreTab from '../components/MoreView'
import Condition from '../components/ConditionView'
import NewCase from '../components/NewCaseView'
import {AppColors} from '../constants'
import TakeCloseUpPhoto from '../components/TakeCloseUpPhotoView'
import TakeOverviewPhoto from '../components/OverviewCameraView'
import CameraRollImagePicker from '../components/CameraRollImagePicker'

const {WhiteColor, AppMainColor1} = AppColors

export default class AppRouter extends Component {

  render () {
    console.log('eventDetect', this.props)
    return (
      <Router hideNavBar>
        <Scene key="modal">
          <Scene key="onboardScreen" component={OnboardScreen} title="OnboardScreen" type={ActionConst.RESET} initial />
          <Scene key="privacyPolicyModal" component={PrivacyPolicyModal} title="PrivacyPolicyModal" type={ActionConst.PUSH} />
          <Scene key="tabbar" tabs>
            <Scene key="homeTab_1" title="HomeTab" icon={TabIcon} iconName='home'>
              <Scene key="homeTab" component={Home} title="Home" type={ActionConst.RESET} />
            </Scene>
            <Scene key="addNewCaseTab_1" initial title="AddNewTab" icon={TabIcon} iconName='addNewCase' >
              <Scene key="addNewCaseTab" component={AddNewCaseTab} title="AddNewCaseTab" type={ActionConst.RESET} />
            </Scene>
            <Scene key="moreTab_1" title="MoreTab" icon={TabIcon} iconName='more'>
              <Scene key="moreTab" component={MoreTab} title="MoreTab" type={ActionConst.RESET} />
            </Scene>
          </Scene>
          <Scene key="condition" component={Condition} title="What is your skin concern?" type={ActionConst.PUSH} hideNavBar={false} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.navBarIcon} />
          <Scene key="newCase" component={NewCase} title="Fill in case details" type={ActionConst.PUSH} hideNavBar={false} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.navBarIcon} />
          <Scene key="takeCloseUpPhoto" component={TakeCloseUpPhoto} title="Take a close-up photo" type={ActionConst.PUSH} hideNavBar={false} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.navBarIcon} />
          <Scene key="takeOverviewPhoto" component={TakeOverviewPhoto} title="Take a overview photo" type={ActionConst.PUSH} hideNavBar={false} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.navBarIcon} />
          <Scene key="cameraRollImagePicker" component={CameraRollImagePicker} title="Select the photo" type={ActionConst.PUSH} hideNavBar={false} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonIconStyle={styles.navBarIcon} />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({

  navBar: {
    backgroundColor: AppMainColor1,
    borderBottomColor: AppMainColor1
  },

  navBarTitle: {
    color: WhiteColor,
    fontSize: 16,
    fontFamily: 'Avenir'
  },

  navBarIcon: {
    tintColor: AppMainColor1,
  },
})
