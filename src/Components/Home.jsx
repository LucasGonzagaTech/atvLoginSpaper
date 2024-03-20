import React from "react";
import { SafeAreaView,View, Image, Text } from "react-native";
import style from "../style";

export default ()=>{
    return(
        <SafeAreaView>
            <View style={style.ImageCenter}>
                <Image  
                style={{
                    marginTop:200,
                    width:100,
                    height:100               
                }}
                source={require("../img/Logo.png")} 
                />
            </View>
            
            <View style={{marginTop:100}}>
                <Text style={style.Text}> GYM BROS</Text>
            </View>
            

            <View style={style.ImageCenter}>
                <Image 
                style={{
                    marginTop:200,            
                }}
                source={require("../img/Touch.png")}/>
            </View>
            
        </SafeAreaView>
    )
}