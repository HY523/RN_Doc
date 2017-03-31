import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput} from 'react-native'
import {AppColors} from '../constants'
import ModalDropdown from 'react-native-modal-dropdown'
import {Actions} from 'react-native-router-flux'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const {WhiteColor, AppMainColor2, AppMainColor1} = AppColors
const countryList = ['JAPAN', 'SWISS', 'SWIZERLAND']

export default class NewCase extends Component {

  constructor (props) {
    super(props)

    this.state = {

      age: '',
      city: '',
      country: '',
      description: '',
      selectedDurationBtn: 'Days',
      selectedGenderBtn: 'Male'
    }
  }

  startCloseUpCamera () {
    Actions.takeCloseUpPhoto({openModal: 'Yes'})
  }

  startOverviewCamera () {
    Actions.takeOverviewPhoto({openModal: 'Yes'})
  }

  render () {
    console.log('props', this.props)
    return (
      <View style={styles.Bg}>

        <View style={styles.contain}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.ProvideView}>
              <View style={styles.providePictureTextView}>
                <Text style={styles.providePrictureTitle}>Please provide us with 2 pictures</Text>
              </View>

              <View style={styles.providePrictureView}>
                <TouchableOpacity onPress={() => this.startCloseUpCamera()} style={styles.CloseBtn}>
                  <Image source={require('../../assets/images/close_up_iOS.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.startOverviewCamera()} style={styles.OverViewBtn}>
                  <Image source={require('../../assets/images/overview_iOS.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.DurationBg}>
              <View style={styles.PaddingDurationBg}>
                <View style={styles.DurationView}>
                  <View style={styles.DurationTextView}>
                    <Text style={styles.DurationText}>How long have you had this condition?</Text>
                  </View>

                  <View style={styles.DurationBtnView}>
                    <View style={styles.PaddingDurationBtnView}>
                      <TouchableOpacity onPress={days => this.setState({selectedDurationBtn: 'Days'})} style={this.state.selectedDurationBtn === 'Days' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedDurationBtn === 'Days' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Days</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={weeks => this.setState({selectedDurationBtn: 'Weeks'})} style={this.state.selectedDurationBtn === 'Weeks' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedDurationBtn === 'Weeks' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Weeks</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={months => this.setState({selectedDurationBtn: 'Months'})} style={this.state.selectedDurationBtn === 'Months' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedDurationBtn === 'Months' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Months</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={years => this.setState({selectedDurationBtn: 'Years'})} style={this.state.selectedDurationBtn === 'Years' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedDurationBtn === 'Years' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Years</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.GenderView}>
                  <View style={styles.GenderTextView}>
                    <Text style={styles.GenderText}>Gender</Text>
                  </View>

                  <View style={styles.GenderBtnView}>
                    <View style={styles.PaddingGenderBtnView}>
                      <TouchableOpacity onPress={male => this.setState({selectedGenderBtn: 'Male'})} style={this.state.selectedGenderBtn === 'Male' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedGenderBtn === 'Male' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Male</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={Fmale => this.setState({selectedGenderBtn: 'Fmale'})} style={this.state.selectedGenderBtn === 'Fmale' ? styles.ButtonSelected : styles.ButtonUnSelected}>
                        <Text style={this.state.selectedGenderBtn === 'Fmale' ? styles.ButtonSelectedTitle : styles.ButtonUnSelectedTitle}>Fmale</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.HoleButtonSelected}>
                        <Text style={styles.ButtonSelectedTitle} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.HoleButtonSelected}>
                        <Text style={styles.ButtonSelectedTitle} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.TextInputBgView}>
              <View style={styles.TextInputView}>
                <TextInput
                  onChangeText={age => this.setState({age, ageError: ''})}
                  value={this.state.age}
                  placeholder={'Age'}
                  placeholderTextColor="#A7B7C2"
                  style={styles.MainTextInputView}
                />
                <View style={styles.PaddingSectionView} />
              </View>

              <View style={styles.TextInputView}>
                <TextInput
                  onChangeText={city => this.setState({city, cityError: ''})}
                  value={this.state.city}
                  placeholder={'City'}
                  placeholderTextColor="#A7B7C2"
                  style={styles.MainTextInputView}
                />
                <View style={styles.PaddingSectionView} />
              </View>

              <View style={styles.CountryTextInputView}>
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
                  <ModalDropdown options={countryList} dropdownStyle={styles.DropdownStyle} textStyle={styles.DropDownBtnText} defaultValue='Country' />
                </View>

                <View style={styles.DropDownBtnView}>
                  <Image source={require('../../assets/images/drop_down.png')} />
                </View>
              </View>

              <View style={styles.DescriptionView}>
                <View style={styles.DescriptionTextView}>
                  <Text style={styles.DescriptionText}>DESCRIPTION</Text>
                </View>
              </View>
            </View>

            <View style={{backgroundColor: AppMainColor2}}>
              <TextInput
                onChangeText={description => this.setState({ description, descriptionError: '' })}
                value={this.state.description}
                placeholder={'Use this sapce to describle your skin condition in detail.'}
                placeholderTextColor="#A7B7C2"
                style={styles.DescriptionInputTextView}
                multiline
              />
            </View>

            <TouchableOpacity style={styles.ContinueBtnView}>
              <Text style={styles.ContinueBtnText}>Continue</Text>
            </TouchableOpacity>
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
    marginTop: ScreenHeight * 0.099,
  },

  providePictureTextView: {
    flexDirection: 'column',
    height: ScreenHeight * 0.044,
    justifyContent: 'center',
    alignItems: 'center',
  },

  providePrictureTitle: {
    fontSize: 12,
    color: '#929292'
  },

  providePrictureView: {
    flexDirection: 'row',
    flex: 1,
    height: ScreenHeight * 0.253,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ButtonSelected: {
    width: ScreenWidth * 0.211,
    height: ScreenHeight * 0.066,
    backgroundColor: '#39C2C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  HoleButtonSelected: {
    width: ScreenWidth * 0.211,
    height: ScreenHeight * 0.066,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  ButtonUnSelected: {
    width: ScreenWidth * 0.211,
    height: ScreenHeight * 0.066,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center'
  },

  ButtonSelectedTitle: {
    fontSize: 16,
    color: WhiteColor,
    fontFamily: 'Avenir'
  },

  ButtonUnSelectedTitle: {
    fontSize: 15,
    color: '#A7b7c2'
  },

  CloseBtn: {
    flex: 1
  },

  OverViewBtn: {
    flex: 1
  },

  ProvideView: {
    flex: 1
  },

  DurationBg: {
    flex: 1,
    height: ScreenHeight * 0.291,
    backgroundColor: WhiteColor,
    flexDirection: 'column',
    alignItems: 'center'
  },

  PaddingDurationBg: {
    flex: 1,
    backgroundColor: WhiteColor,
    width: ScreenWidth * 0.936,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  DurationView: {
    flex: 1,
    flexDirection: 'column'
  },

  DurationTextView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: WhiteColor
  },

  DurationText: {
    fontSize: 16
  },

  DurationBtnView: {
    flex: 2,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  PaddingDurationBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ScreenWidth * 0.936,
    height: ScreenHeight * 0.066,
    backgroundColor: WhiteColor
  },

  GenderView: {
    flex: 1,
    flexDirection: 'column'
  },

  GenderTextView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: WhiteColor
  },

  GenderText: {
    fontSize: 16
  },

  GenderBtnView: {
    flex: 2,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  PaddingGenderBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ScreenWidth * 0.936,
    height: ScreenHeight * 0.066,
    backgroundColor: WhiteColor
  },

  TextInputBgView: {
    flex: 1,
    height: ScreenHeight * 0.287
  },

  TextInputView: {
    flex: 1,
    backgroundColor: AppMainColor2
  },

  MainTextInputView: {
    height: 45,
    fontSize: 17,
    fontFamily: 'Avenir',
    paddingLeft: ScreenWidth * 0.032
  },

  CountryTextInputView: {
    flex: 1,
    backgroundColor: AppMainColor2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  PaddingSectionView: {
    backgroundColor: WhiteColor,
    height: 2
  },

  DropDownBtnView: {
    backgroundColor: AppMainColor2,
    justifyContent: 'center',
    paddingRight: ScreenWidth * 0.032
  },

  DescriptionView: {
    flex: 1,
    backgroundColor: WhiteColor,
    height: 45,
    flexDirection: 'column'
  },

  DescriptionText: {
    fontSize: 16
  },

  DescriptionTextView: {
    flex: 1,
    marginLeft: ScreenWidth * 0.032,
    justifyContent: 'center'
  },

  DescriptionInputTextView: {
    height: 154,
    fontSize: 17,
    fontFamily: 'Avenir',
    paddingLeft: ScreenWidth * 0.032
  },

  ContinueBtnView: {
    flex: 1,
    backgroundColor: AppMainColor1,
    height: ScreenHeight * 0.099,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ContinueBtnText: {
    fontSize: 16,
    color: WhiteColor,
    fontFamily: 'Avenir'
  },

  DropDownBtnText: {
    fontSize: 17,
    fontFamily: 'Avenir',
    paddingLeft: ScreenWidth * 0.032,
    color: '#A7B7C2'
  },

  DropdownStyle: {
    width: ScreenWidth
  }
})
