import React, {Component} from 'react'
import {StyleSheet, TouchableHighlight, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux'

const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height
const modalHeight = screen_height*0.606
const modalWidth = screen_width* 0.787


export default class PrivacyPolicy extends Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  ModalPush(){
    Actions.privacyPolicyModal()
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
              <Image source={require('../../assets/images/avatarLock.png')} resizeMode={Image.resizeMode.contain} style={styles.Avatar}/>
            </View>

            <View style={styles.ContentView}>

              <View style={styles.TextView}>
                <View style={{marginTop:10}}>
                    <Text style={styles.Text}>We know that your</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>privacy is important.</Text>
                </View>
              </View>

              <View style={styles.TextView}>
                <View style={{marginTop:10}}>
                    <Text style={styles.Text}>Your information is</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={styles.Text}>completely anoymous</Text>
                </View>
              </View>

              <View style={styles.TextView}>
                <TouchableOpacity style={{marginTop:10}} onPress={()=>this.ModalPush()}>
                    <Text style={styles.LinkText}>Details of our Privacy Policy</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth:1, borderBottomColor: '#40DDDD', width: 0.413*screen_width, marginTop: 30}}/>
              </View>

              <View style={styles.swiperView}>
                <Image source={require('../../assets/images/swiper2.png')} resizeMode={Image.resizeMode.contain} style={styles.Swiper}/>
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

    ContentView:{
      flexDirection: 'column',
    },

    AvatarView:{
      alignItems: 'center'
    },

    Avatar:{
      width: screen_width*0.235,
      height: screen_height*0.235,
      marginTop: -(screen_height*0.12),
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
      marginTop: 20
    },

    Text:{
      fontSize: 17,
    },

    LinkText:{
      fontSize: 12
    },

    swiperView:{
      alignItems: 'center',
      marginTop: 50
    },

    Swiper:{
      width: modalWidth,
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
