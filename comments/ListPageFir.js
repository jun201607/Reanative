import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class ListPageFir extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  toMain(){
    this.props.navigator.pop();
  }
  render() {
    let arr=[{id:1},{id:2},{id:3},{id:4}]
    let tesumap= arr.map(function (itm) {
      return (
      <View style={[styles.mainContiner,styles.marginBottom10,styles.paddingTop15,styles.paddingLeft15,styles.flexDirectionRow,styles.maxHeight150]} key={itm.id} >
        <View style={[styles.flex,styles.overflowHide]}>
          <Image style={styles.imgLeftStyle}  source={require('../img/tabacon/tbDev.png')}/>
        </View>
        <View style={[styles.flex2,styles.padding10,styles.alignItemsStart,styles.flexStart]}>
          <Text style={[styles.flex,styles.height30]}>Tirtle·amin</Text>
          <Text style={[styles.flex2,styles.height60]}>Tirtle aiaasdm asdas amda asda is a asdk asd</Text>
          <View style={[styles.flex,styles.overflowHide,styles.marginTop10,styles.flexDirectionRow,styles.alignItemsEnd]}>
            <Text>timpresa</Text>
            <View style={[styles.flex2,styles.alignItemsEnd,styles.flexDirectionRowReverse]}>
              <Icon name='eye'  color='black' size={15}></Icon>
              <Text style={[styles.marginRight5]}>See</Text>
              <Icon style={[styles.marginRight5]} name='comment'  color='black' size={15}></Icon>
              <Text style={[styles.marginRight5]}>Com</Text>
            </View>
          </View>
        </View>
      </View>
      )
    })
    return (
      <View style={[styles.detailContainView,styles.flexStart]}>
        {tesumap}
      </View>
    )
  }
}
