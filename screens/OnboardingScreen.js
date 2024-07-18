import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
// import { Lottie } from "lottie-react-native";

const {width, height} = Dimensions.get('window')
const OnboardingScreen = () => {
    const navigation = useNavigation()

    const handleDone = ()=>{
        navigation.navigate('HomeScreen')
    }

    const doneButton = ({...props}) =>{
        return(
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text>Done</Text>
        </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal:15}}

        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: <Image source={require('../assets/delivery.png')}  style={{height:300}}/>,
            title: "Real-time tracking",
            subtitle: "Be in every step of the way without actually being there.",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require('../assets/Navigation app.png')}  style={{height:300}}/>,
            title: "Book more than one ryde!",
            subtitle: "Book multiple rydes at once.",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require('../assets/Three female marketers are working on Digital Marketing.png')}  style={{height:300}}/>,
            title: "Tender easy appeal!",
            subtitle: "When stuck tender an easy appeal, we’re here to serve you.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie:{
    width:width*0.9,
    height:width,
  },
  doneButton:{
    padding:20,
    // backgroundColor: "red", 
    // borderTopLeftRadius:'100%',
    // borderBottomLeftRadius:'100%'
  }
});
