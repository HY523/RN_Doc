import React, {Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Actions} from 'react-native-router-flux';

const screen_width = Dimensions.get('window').width
const screen_height = Dimensions.get('window').height

export default class NavigationBar extends Component{

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  navBtnClick(){
    Actions.pop()
  }

  render(){
    
    return(
      <View style={styles.Bg}>

        <View style={styles.NavigationBarView}>
          <TouchableOpacity onPress={()=>this.navBtnClick()}>
            <Image source={require'../assets/images/back_icon.png'} resizeMode={this.Image.contain} style={styles.Back_icon}/>
          </TouchableOpacity>
          <View style={styels.navigationText}>
            <Text>this.props.navigationText</Text>
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

    NavigationBar: {
      backgroundColor: '#40DDDD',
      width: screen_width,
      height: screen_height*0.05,
      flexDirection: 'row'
    },

    Back_icon: {
      width: 10,
      height: 10
    },

    navigationText:{
      color:'#FFF',
      fontSize: 15
    }
})
