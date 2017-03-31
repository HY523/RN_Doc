import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux';

const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height

export default class Condition extends Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render(){
    
    return(
      <View style={styles.Bg}>

        <View style={styles.contain}>

          <View style={styles.skinTypeSelectView}>

            <TouchableOpacity onPress={()=>Actions.newCase()} style={{backgroundColor:'#FFF', marginLeft:screen_width*0.112}}>
              <Image source= {require('../../assets/images/skin.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#FFF', marginRight:screen_width*0.112}}>
              <Image source= {require('../../assets/images/mole.png')}/>
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
      flexDirection: 'column',
    },

    contain:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center'
    },

    skinTypeSelectView:{
      flexDirection:'row',
      marginTop: screen_height*0.073,
      justifyContent: 'space-between',
    }
})
