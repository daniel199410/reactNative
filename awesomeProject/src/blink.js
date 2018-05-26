import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';

export class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {isShowingTest: true};

        setInterval(() => {
            this.setState(prevState => {
                return { isShowingTest: !prevState.isShowingTest };
            })
        }, 1000);
    }
    render(){
        let display = this.state.isShowingTest ? this.props.text : '';
        return (
            <Text style={styles.blink}>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
    blink: {
      fontSize: 30,
      fontWeight: 'bold'
    },
  });