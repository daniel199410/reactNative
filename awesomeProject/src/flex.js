import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export class Flex extends Component{
    render(){
        return (
            <View style={{ flex: 1, flexDirection:'row'}}>
                <View style={{ flex:1, backgroundColor: 'powderblue' }}>
                    <Text>Text1</Text>
                </View>
                <View style={{ flex:2, backgroundColor: 'skyblue' }}>
                    <Text>Text</Text>
                </View>
                <View style={{ flex:3, backgroundColor: 'steelblue' }}>
                    <Text>Text</Text>
                </View>
            </View>
        );
    }
}