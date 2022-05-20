import { StyleSheet, Text, View, TouchableOpacity, Vibration } from "react-native"
import * as React from "react"
import {useState} from 'react'


export default function Calculator({navigation}){
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const buttons = ['C', 'DEL', '=' , 1 , 2 , '+' , 3 , 4 , '-' , 5 , 6 , '*' , 7 , 8 , '/' , 9 , 0 , '%']

  function calculator() {
    
    let lastArr = currentNumber[currentNumber.length-1];
    
    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '%') {
      setCurrentNumber(currentNumber)
      return
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
    if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/' || buttonPressed === '%') {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
            buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 ) {
      Vibration.vibrate(35);
    }
    switch(buttonPressed) {
      case 'DEL':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        Vibration.vibrate(35);
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        Vibration.vibrate(35);
        setLastNumber(currentNumber + '=')
        calculator()
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: '#f5f5f5',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      height: 12,
      color: '#00b9d6',
      margin : 20,
      fontSize: 25,
    },
    historyText: {
      height: 12,
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: '5%',
      margin: 15,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: '100%',
      height: '57.8%',
      backgroundColor: 'red',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '30%',
      minHeight: '52%',
      flex: 2,
    },
    textButton: {
      color: 'white',
      fontWeight : '600',
      fontSize: 28,
    }
  })

  return(
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' || button === '/' || button === '*' || button === '-' || button === '+' || button === '%' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#930706'} ]} onPress={() => handleInput(button)}>
            <Text style={[styles.textButton, {color: 'white', fontSize: 28} ]}>{button}</Text>
          </TouchableOpacity>
          :
          button === 0 ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#ff5757'}]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'DEL' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#930706'}]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'C' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#930706'}]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#ff5757'}]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}