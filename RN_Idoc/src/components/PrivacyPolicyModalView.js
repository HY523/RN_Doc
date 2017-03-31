import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import {Actions} from 'react-native-router-flux'


const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height


export default class PrivacyPolicyModal extends Component{

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  modalClose(){

    Actions.pop()
  }

  render(){

    return(
      <View style={styles.Bg}>

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.ScrollView}>

          <View style={styles.ContentView}>
            <View style={styles.TextView}>
              <Text style = {styles.PrivacyTitle}>Here is a Privacy Policy ModalView!</Text>
              <Text style = {styles.PrivacyTitle}>Please read carefully our Privacy Policy!</Text>
            </View>

            <TouchableOpacity onPress={()=>this.modalClose()} style = {styles.CloseBtn}>
              <Text style= {styles.BtnTitle}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )     
  }
}

const styles= StyleSheet.create({
  
  Bg:{
    flex:1,
    backgroundColor:'#FFF'
  },

  ScrollView:{
    marginTop: 30,
    flexDirection: 'column',
    width: screen_width,
    height: screen_height,
    flex:1
  },

  ContentView: {
  
    flexDirection: 'column',
    alignItems: 'center'
  },

  PrivacyTitle: {
    fontSize: 16,
    fontFamily:'Avenir Next'
  },

  CloseBtn: {
    width: screen_width*0.3,
    height: screen_height*0.05,
    backgroundColor: '#40DDDD',
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20
  },

  BtnTitle: {
    color: '#FFF',
    fontSize: 16,
    fontFamily:'Avenir Next'
  }
})