import React from "react";
import { StyleSheet } from "react-native";

export default Style = StyleSheet.create({

    ImageCenter:{
        justifyContent: "center",
    alignItems: "center",
    },
    Container:{
    justifyContent: "center",
    alignItems: "center",
    },
    Fundo:{
        backgroundColor:"#4361ee",
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center"
    },
    Text:{
        fontWeight:"bold",
        color:"#FFF",
        textAlign:"center"
    },
    Input:{
        textAlign:"center",
        backgroundColor:"#4895ef",
        color:"#FFF",
        height:40,
        width:300,
        margin:12,
        padding:10,
    },
    NaoClique:{
        textAlign:"right",
        marginBottom:20
    },
    Button:{
        marginBottom:20,
        backgroundColor:"#4895ef",
        height: 30, 
        borderRadius: 25, 
        width: 100, 
        alignItems: "center", 
        justifyContent: "center", 
        
    },
})