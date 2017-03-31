import React, {Component} from 'react'
import {StyleSheet, TouchableHighlight, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'


const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height

const modalHeight = screen_height*0.606
const modalWidth = screen_width* 0.787


export default class Price extends Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  _onClick(){
    
    Actions.tabs()
  }

  render(){
    
    return(

      <View style={styles.Bg}>

        <View style={styles.Contain}>
          <View style={styles.BorderView}>

            <View style={styles.AvatarView}>
              <Image source={require('../../assets/images/avatarCard.png')} resizeMode={Image.resizeMode.contain} style={styles.Avatar}/>
            </View>

            <View style={styles.ContentView}>

              <View style={styles.TextView}>
                <View>
                  <Text style={styles.Text}>Dermatologist</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>recommendation</Text>
                </View>
                <View style={{marginTop:10}}>
                   <Text style={styles.Text}>start at $24.99</Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=>{this._onClick()}} style={styles.ButtonView}>
                <Text style={styles.ButtonTitle}>Get started</Text>
              </TouchableOpacity>

              <View style={styles.swiperView}>
                <Image source={require('../../assets/images/swiper3.png')} resizeMode={Image.resizeMode.contain} style={styles.Swiper}/>
              </View>
            </View>
          </View>

          <View style={styles.SkipButtonView}>
            <TouchableOpacity onPress={()=>{this._onClick()}}>
              <Text style={styles.SkipButtonText}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({

    Bg:{
      backgroundColor: '#FFF',
      flex:1,
      flexDirection: 'column'
    },

    Contain:{
      flex:1
    },

    AvatarView:{
      alignItems: 'center',
    },

    Avatar:{
      width: screen_width*0.235,
      height: screen_height*0.235,
      marginTop: -(screen_height*0.12),
    },

    ContentView:{
      flexDirection: 'column',
      marginTop:60,
      // marginTop: modalHeight*0.309,
    },

    BorderView:{
      width: modalWidth,
      height: modalHeight,
      borderColor:'#40DDDD', 
      marginTop: screen_height*0.103,
      borderRadius: 7, 
      marginLeft: (screen_width - modalWidth)/2, 
      borderWidth:3, 
      flexDirection: 'column'
    },

    TextView:{
      flexDirection:'column', 
      justifyContent: 'center', 
      alignItems: 'center',
    },

    Text:{
      fontSize: 17,
      fontFamily: 'Cochin',
    },

    ButtonView:{
      backgroundColor: '#40DDDD',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: screen_height*0.06,
      width: screen_width*0.357,
      borderRadius: 8,
      marginLeft: (modalWidth - (screen_width*0.357))/2,
      marginTop: modalHeight*0.13
    },

    ButtonTitle: {
      color: '#FFF',
      fontSize: 20
    },

    swiperView:{
      alignItems: 'center',
      marginTop: 45
    },

    Swiper:{
      width: screen_width*0.0773,
      height: screen_height*0.0105
    },

    SkipButtonView: {
      justifyContent: 'center', 
      alignItems:'center', 
      marginTop: screen_height*0.06
    },

    SkipButtonText: {
      fontSize: 14,
    }
})
