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
        marginBottom:10,
        backgroundColor:"#4895ef",
        height: 30, 
        borderRadius: 25, 
        width: 100, 
        alignItems: "center", 
        justifyContent: "center", 
        
    },
    // Pagina de Cadastro
    Header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        marginBottom:20,
    },
    Title:{
        fontWeight:"bold",
        color:"#FFF",
        textAlign:"center",
        fontSize:20
    },
    InputRow:{
        flexDirection:"row",
        width:100
    },
    InputRowLine:{
        width:140,
        backgroundColor:"#4895ef",
        color:"#FFF",
        height:40,
        margin:11
    },
    AreaButtons1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        marginTop:20,
    },
    AreaButtons2:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        
    },
    InputTel:{
        backgroundColor:"#4895ef",
        color:"#FFF",
        height:40,
        width:180,
        margin:12,
        padding:10,
    },
    InputCad:{
        backgroundColor:"#4895ef",
        color:"#FFF",
        height:40,
        width:300,
        margin:12,
        padding:10,
    },

})