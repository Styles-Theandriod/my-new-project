import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (key, value) =>{
    try{
        await AsyncStorage.setItem(key, value);
    }catch(err){
        console.log("Error storing value", err);
    }
}

export const getItem = async (key ) =>{
    try{
        await AsyncStorage.setItem(key, value);
    }catch(err){
        console.log("Error retrieving value", err);
    }
}

export const removeItem = async (key) =>{
    try{
        await AsyncStorage.setItem(key);
    }catch(err){
        console.log("Error deleting value", err);
    }
}