import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Image, Button, TouchableOpacity } from "react-native";
import style from "../style";

export default () => {

    // Destruction    
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [showWelcome, setShowWelcome] = useState(false);
    const [exitMessage, setExitMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    // Funcão para armazenar user a mensagem de boas vindas
    function Welcome(user) {
        let wel = "Bem vindo(a) ao sistema " + user;
        return wel;
    }

    //Função para mostrar a mensagem de boas vindas
    function handleEntrarPress() {
        if (user === "Lucas" && password === "1234"){
        setShowWelcome(true);
        setExitMessage(false);
        }
        else{
        let error = "Usuário ou senha incorreto"
        setErrorMessage(error);
        setShowWelcome(false);
        setExitMessage(false);
        }
        
            
    }

    function handleSairPress() {
        setShowWelcome(false);
        setErrorMessage(false);
        setUser(null);
        setPassword(null);
        let bye = user + " Saiu do sistema"
        setExitMessage(bye)
    }


    return (
        <SafeAreaView>
            <View style={style.ImageCenters}>
                {/* Logo */}
                <Image style={style.Imagem} source={require("../img/login.png")} />
            </View>


            {/* Campo Usuário */}
            <Text style={style.Text}>Digite seu usuário</Text>
            <TextInput
                style={style.Input}
                placeholder="Usuário"
                value={user}
                onChangeText={(text) => setUser(text)}
            />

            {/* Campo Senha */}
            <Text style={style.Text}>Digite sua senha</Text>
            <TextInput
                style={style.Input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={style.NaoClique}>Não tem usuário? Clique aqui</Text>

            <View style={style.Container}>

                {/* Botão Entrar */}

                <TouchableOpacity
                    style={style.Button}
                    onPress={handleEntrarPress}
                >
                    <Text style={style.Text}>Entrar</Text>
                </TouchableOpacity>
                {/* Botão Sair */}

                <TouchableOpacity
                    style={style.Button}
                    onPress={handleSairPress}
                    title="Sair"
                >
                    <Text style={style.Text}>Sair</Text>

                </TouchableOpacity>



                {/* Mostrar mensagem de boas-vindas */}
                {showWelcome && <Text style={style.Text}>{Welcome(user)}</Text>}

                {exitMessage && <Text style={style.Text}>{exitMessage}</Text>}

                {errorMessage && <Text style={style.Text}>{errorMessage}</Text>}
            </View>

        </SafeAreaView>
    );
}
