import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, ScrollView, ListView, TouchableHighlight} from 'react-native'
import {SwipeListView} from 'react-native-swipe-list-view'
import {Actions} from 'react-native-router-flux'
import {AppColors} from '../constants'
import HeaderBar from '../components/HeaderBar'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

const {WhiteColor} = AppColors

export default class Home extends Component {

  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      listViewData: Array(1).fill('').map((_, i) => `item #${i}`)
    }
  }

  deleteRow (secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({listViewData: newData})
  }

  goToDraftCaseView () {
    console.log('ok1')
    Actions.draftCase()
  }

  render () {
    return (
      <View style={styles.Bg}>
        <HeaderBar />
        <View style={styles.contain}>

          <ScrollView
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            style={styles.ScrollView}>

            <View style={styles.PendingCaseSectionView}>
              <View style={styles.ListContentInsideView}>

                <View style={styles.PendingCaseHeaderSectionView}>
                  <Text style={styles.HeaderSectionTitle}>PENDING CASES</Text>
                  <Text style={styles.HeaderSectionTitle} />
                </View>

                <View style={styles.PendingCaseListView}>
                  <View style={styles.PendingCaseInsideView}>
                    <View style={styles.ImageListView}>
                      <Image source={require('../../assets/images/hand_sm.png')} />
                    </View>

                    <View style={styles.TitleListView}>
                      <Text style={styles.CaseTitle}>Skin</Text>
                      <Text style={styles.DetailTitle}>Submitted: 11/2/16</Text>
                      <Text style={styles.DetailTitle}>'Description:'+'Lorem ipsum dolor sit amet,'</Text>
                    </View>
                  </View>

                  <View style={styles.MilestoneImageView}>
                    <Image source={require('../../assets/images/milestone_m.png')} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.AnsweredCaseSectionView}>
              <View style={styles.ListContentInsideView}>
                <View style={styles.HeaderSectionView}>
                  <Text style={styles.HeaderSectionTitle}>ANSWERED CASES</Text>
                </View>

                <View style={styles.CaseListView}>
                  <View style={styles.ImageListView}>
                    <Image source={require('../../assets/images/hand_sm.png')} />
                  </View>

                  <View style={styles.TitleListView}>
                    <Text style={styles.CaseTitle}>Mole</Text>
                    <Text style={styles.DetailTitle}>Submitted: 11/2/16</Text>
                    <Text style={styles.DetailTitle}>'Description:'+'Lorem ipsum dolor sit amet,'</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.DraftCaseSectionView}>
              <View style={styles.DraftListContentInsideView}>
                <View style={styles.HeaderSectionView}>
                  <Text style={styles.HeaderSectionTitle}>DRAFT CASES</Text>
                </View>

                <SwipeListView
                  dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                  renderRow={data => (
                    <TouchableHighlight
                      onPress={() => this.goToDraftCaseView()}
                      style={{backgroundColor: WhiteColor}}
                      underlayColor={'#AAA'}
                    >

                      <View style={styles.CaseListView}>
                        <View style={styles.ImageListView}>
                          <Image source={require('../../assets/images/hand_sm.png')} />
                        </View>

                        <View style={styles.TitleListView}>
                          <Text style={styles.CaseTitle}>Skin</Text>
                          <Text style={styles.DetailTitle}>Submitted: 11/2/16</Text>
                          <Text style={styles.DetailTitle}>'Description:'+'Lorem ipsum dolor sit amet,'</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  )}
                  renderHiddenRow={(data, secId, rowId, rowMap) => (
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <TouchableOpacity style={styles.rowRightBack} onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                        <Image source={require('../../assets/images/list_delete.png')} />
                      </TouchableOpacity>
                    </View>
                  )}
                  leftOpenValue={0}
                  rightOpenValue={-75}
                  disableRightSwipe
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  Bg: {
    backgroundColor: WhiteColor,
    flex: 1,
    flexDirection: 'column',
  },

  contain: {
    flex: 1,
  },

  PendingCaseSectionView: {
    flex: 1,
    alignItems: 'center',
    height: ScreenHeight * 0.374
  },

  AnsweredCaseSectionView: {
    flex: 1,
    alignItems: 'center',
    height: ScreenHeight * 0.269
  },

  DraftCaseSectionView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },

  ListContentInsideView: {
    flex: 1,
    width: ScreenWidth * 0.947,
    flexDirection: 'column',
    backgroundColor: WhiteColor,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF0F2'
  },

  DraftListContentInsideView: {
    flex: 1,
    width: ScreenWidth * 0.947,
    height: ScreenHeight * 0.269,
    flexDirection: 'column',
    backgroundColor: WhiteColor
  },

  HeaderSectionView: {
    flex: 0.167,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  CaseListView: {
    flex: 0.833,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  HeaderSectionTitle: {
    fontSize: 17,
    fontFamily: 'Avenir Next'
  },

  ImageListView: {
    flex: 0.268,
    justifyContent: 'center',
    alignItems: 'center'
  },

  TitleListView: {
    flex: 0.732,
    flexDirection: 'column',
    backgroundColor: WhiteColor,
    marginLeft: ScreenWidth * 0.024
  },

  CaseTitle: {
    fontSize: 17,
    fontFamily: 'Avenir Next'
  },

  DetailTitle: {
    fontSize: 12,
    fontFamily: 'Avenir Next'
  },

  PendingCaseHeaderSectionView: {
    flex: 0.184,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  PendingCaseListView: {
    flex: 0.816,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  PendingCaseInsideView: {
    flex: 0.456,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  MilestoneImageView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.544
  },

  rowRightBack: {
    justifyContent: 'flex-end',
    backgroundColor: WhiteColor,
    flex: 1,
    flexDirection: 'row',
  },
})
