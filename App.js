/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
      <Text style={styles.red}> just red </Text>
      <Text style={styles.bigblue}> just bigblue </Text>
      <Text style={[styles.bigblue, styles.red]}> bigblue, then red </Text>
      <Text style={[styles.red, styles.bigblue]}> red, then bigblue </Text>
      </View>
      );
  }
}

const styles = StyleSheet.create ( {
    bigblue: {
      color:'blue',
      fontWeight:'bold',
      fontSize:30,
    },
    red: {
      color:'red',
    },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);

// class Greeting extends Component {
//  render () {
//  return (
//    <Text> hello {this.props.name}! </Text>
//    );
//  }
// }

/**
 state demo
*/
// class Blink extends Component {
//   constructor (props) {
//     super (props); 
//       this.state = {showText: true};
//       setInterval(() => {
//         this.setState(previousState => {
//         return {showText :!previousState.showText};
//         });
//       }, 1000);
// }




// export default class App extends Component {
//   render() {
//   // let pic = {
//   // uri: 'https://www.baidu.com/img/dong_87712a1b3d0eb1f12267b404cb795deb.GIF'
//   // };
// //   render() {
// //   let display = this.state.showText ? this.props.text : ' ';
// //   return (
// //     <Text>{display}</Text>
// //   );
// // }

//     return (
//       /**
//       <View style={{width:1000, height:200}}>
//       <Blink text='I love to Blink'/>
//       <Blink text='Yes blinking is so great'/>
//       <Blink text='Why did they ever take this out of HTML'/>
//       <Blink text='Look at me look at me look at me'/>
//       </View>
//       */
//     );
//   }
// }
