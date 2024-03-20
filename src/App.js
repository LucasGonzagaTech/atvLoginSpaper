import React from "react";
import { SafeAreaView,Text } from "react-native";
import style from "./style";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Home from "./Components/Home";
import Categorias from "./Components/Categorias";

export default () =>{
    return(
        <SafeAreaView style={style.Fundo}>
            {/* <Home/> */}
            <Categorias/>
            {/* <Login/> */}
            {/* <Cadastro/> */}
        </SafeAreaView>
    )
}