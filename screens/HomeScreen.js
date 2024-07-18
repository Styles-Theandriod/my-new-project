import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const {width, height}  = Dimensions.get('window')
import Lottie from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie source={require('../animations/Animation - 1721229743306.json')} autoPlay loop/>
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    lottie:{
        width: width*0.9,
        height: width,
    },
    text:{
        fontSize: width*0.09,
        marginBottom:20
    },
    resetButton: {
        backgroundColor:'#34d399',
        padding:10,
        borderRadius:10
    }
})