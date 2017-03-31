import React, {Component} from 'react'
import {StyleSheet, Image, View, Dimensions} from 'react-native'

const ScreenHeight = Dimensions.get('window').height
const TabBarHeight = ScreenHeight * 0.108

const TabImage = {

  home: require('../../assets/images/tabBar_icon/homeTab.png'),
  home_active: require('../../assets/images/tabBar_icon/homeTab_A.png'),
  addNewCase: require('../../assets/images/tabBar_icon/addNewCaseTab.png'),
  addNewCase_active: require('../../assets/images/tabBar_icon/addNewCaseTab_A.png'),
  more: require('../../assets/images/tabBar_icon/moreTab.png'),
  more_active: require('../../assets/images/tabBar_icon/moreTab_A.png')
}

export default class TabIcon extends Component {

  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
    const tab = this.props.iconName
    return (
      <View style={[styles.tabs, this.props.style]}>
        <Image source={this.props.selected ? this.renderSelectIcon(tab) : this.renderIcon(tab)} resizeMode={Image.resizeMode.contain} style={styles.TabImage} />
      </View>
    )
  }

  renderIcon (tab) {
    if (tab === 'home') {
      return TabImage.home
    }
    if (tab === 'addNewCase') {
      return TabImage.addNewCase
    }
    if (tab === 'more') {
      return TabImage.more
    }
  }

  renderSelectIcon (tab) {
    if (tab === 'home') {
      return TabImage.home_active
    }
    if (tab === 'addNewCase') {
      return TabImage.addNewCase_active
    }
    if (tab === 'more') {
      return TabImage.more_active
    }
  }
}

const styles = StyleSheet.create({

  tabs: {
    height: TabBarHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TabImage: {
    marginTop: -15
  }
})
