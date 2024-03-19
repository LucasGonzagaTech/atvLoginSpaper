import React from "react";
import { SafeAreaView,Text } from "react-native";
import style from "./style";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";

export default () =>{
    return(
        <SafeAreaView style={style.Fundo}>
            {/* <Login/> */}
            <Cadastro/>
        </SafeAreaView>
    )
}