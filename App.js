import React, { Component } from 'react';
import {Alert,StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

export default class ButtonBasics extends Component {
  constructor(){
    super();
    this.state={
      ButtonText : Array(9).fill(''),
      xIsNext: true
    }
  }

  ChangeButtonTitle = (i) => () => {
    let a = this.state.ButtonText
    if(a[i] == ''){
      a[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        ButtonText : a,
        xIsNext: !this.state.xIsNext
      });
      var winner;
      if(winner =  calculateWinner(a)){
        Alert.alert(`The winner is ${winner}.`);
        this.setState({
          ButtonText : Array(9).fill(''),
          xIsNext: !this.state.xIsNext
        });
      }
      if(fillAllField(a)){
        Alert.alert(`Draw`);
        this.setState({
          ButtonText : Array(9).fill(''),
          xIsNext: !this.state.xIsNext
        });
      }
    }
  }


  render() {
    var matrix=[];
    for(var j = 0; j<3; j++){
      var rows = [];
      for(var i = 0; i<3; i++){
        rows.push(
          <TouchableOpacity key={i+j*3} style={styles.ButtonStyle} activeOpacity = { .0} onPress={this.ChangeButtonTitle(i+j*3)}>
            <Text style={styles.TextStyle}> {this.state.ButtonText[i+j*3]} </Text>
          </TouchableOpacity>
        );
      }
      matrix.push(
        <View key={j} style={styles.SubContainer} >
          {rows}
        </View>
      )
    }
    return (
      <View style={styles.MainContainer} >
        {matrix}
      </View>

    );
  }
}
const styles = StyleSheet.create(
  {
    SubContainer: {
      flexDirection: 'column',
    },

    MainContainer: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    ButtonStyle: {
      borderStyle: 'solid',
      borderColor: '#ffffff',
      paddingRight:5,
      margin: 3,
      width : 50,
      height : 50,
      backgroundColor:'#000000',
    },

    TextStyle:{
      color:'#ffffff',
      fontSize: 40,
      textAlign:'center',
      textAlignVertical:'center'
    }

  });

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
function fillAllField(squares) {
  for (let i = 0; i < 9; i++) {
    if(squares[i]=='')
      return null;
  }
  return true;
}
