import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Greeting } from './src/greeting';
import { Blink } from './src/blink';
import { Flex } from './src/flex';

export default class App extends React.Component {
  render() {
    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Image source={pic} style={{width: 193, height: 110}} />
            <View style={{alignItems: 'center'}}>
                <Greeting name='Name1'/>
                <Greeting name='Name2'/>
                <Greeting name='Name3'/>
            </View>
            <View>
                <Blink text="Blinking"/>
            </View>
            <Flex/>
        </View>       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});