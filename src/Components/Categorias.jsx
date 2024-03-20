import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import style from "../style";

export default () => {

    const applicants = [{
        name: 'Joe', work: 'freelance-developer',
        blogs: '54', websites: '32',
        hackathons: '6', location: 'morocco', id: '0',
    },
    {
        name: 'janet', work: 'fullstack-developer',
        blogs: '34', websites: '12',
        hackathons: '8', location: 'Mozambique', id: '1',
    },

    ];

    return (

        <SafeAreaView>
            <Text
                style={[style.Text,
                { marginTop: 20,
                    marginBottom:50 }]}
            >GYM BROS - Menu Principal</Text>

            <View style={style.Categorias}>

                <View style={style.BoxCategorias}>
                    <Image style={style.Icons} source={require("../img/gymIcon.png")} />
                    <Text>Academias</Text>
                </View>
                <View style={style.BoxCategorias}>
                <Image style={style.Icons}  source={require("../img/snacksIcon.png")} />
                <Text>Snacks</Text>
                </View>

            </View>
            <View style={style.Categorias}>

                <View style={style.BoxCategorias}>
                <Image style={style.Icons}  source={require("../img/gymbagIcon.png")} />
                <Text>Acessórios</Text>
                </View>
                <View style={style.BoxCategorias}>
                <Image style={style.Icons}  source={require("../img/exerciseIcon.png")} />
                <Text>Exercícios</Text>
                </View>

            </View>
            <View style={style.Categorias}>

                <View style={style.BoxCategorias}>
                <Image style={style.Icons}  source={require("../img/embreveIcon.png")} />
                <Text>Em breve...</Text>
                </View>
                <View style={style.BoxCategorias}>
                <Image style={style.Icons}  source={require("../img/embreveIcon.png")} />
                <Text>Em breve...</Text>
                </View>

            </View>

        </SafeAreaView>


    )
}