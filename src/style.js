import React from "react";
import { StyleSheet } from "react-native";

export default Style = StyleSheet.create({


 // GERAL //
 Fundo:{
        backgroundColor:"#10002b",
        flexGrow:1,
    },

    Container:{
        justifyContent: "center",
        alignItems: "center",
        },
// IMAGEM //

ImageCenter:{
        justifyContent: "center",
    alignItems: "center",
    },

ImageLeft:{
        justifyContent: "center",
    alignItems: "center",
    },
Icons:{
    width:50,
    height:50
},

// HOME //
Categorias:{
    flexDirection: "row",
    justifyContent:"space-around",
    marginBottom:100
},  

BoxCategorias:{
    width:100,
    height:100,
    backgroundColor:"white",
    alignItems:"center"
},

// LOGIN //

NaoClique:{
    textAlign:"right",
    marginBottom:20
},

// CADASTRO //

Input:{
    textAlign:"center",
    backgroundColor:"#4895ef",
    color:"#FFF",
    height:40,
    width:300,
    margin:12,
    padding:10,
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

// CATEGORIAS //



    
    
   
    Text:{
        fontWeight:"bold",
        color:"#FFF",
        textAlign:"center"
    },
    
   
    

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
    

})