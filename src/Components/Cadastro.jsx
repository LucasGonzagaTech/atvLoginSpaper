import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Image, Button, TouchableOpacity } from "react-native";
import style from "../style";
export default () => {
    // Destruction
    const [cadastro, setCadastro] = useState(false);
    const [alterar, setAlterar] = useState(false);
    const [excluir, setExcluir] = useState(false);
    const [pesquisar, setPesquisar] = useState(false);


    function Cadastro() {
        let cad = " Cadastrado com sucesso ";
        return cad;

    }
    function handleCadastrarPress() {
        setAlterar(false)
        setExcluir(false)
        setPesquisar(false)
        setCadastro(true);
    }

    function Altera() {
        let alt = " Informações atualizadas ";
        return alt;
    }
    function handleAlterarPress() {
        setCadastro(false)
        setExcluir(false)
        setPesquisar(false)
        setAlterar(true);
    }

    function Exclui() {
        let exc = " Informações deletadas ";
        return exc;
    }
    function handleExcluirPress() {
        setAlterar(false)
        setCadastro(false)
        setPesquisar(false)
        setExcluir(true);
    }

    function Pesquisa() {
        let pes = " Pesquisa realizada ";
        return pes;
    }
    function handlePesquisarPress() {
        setAlterar(false)
        setExcluir(false)
        setCadastro(false)
        setPesquisar(true);
    }

    return (
        <SafeAreaView>
            {/* Header */}
            <View style={style.Header}>
                <Image source={require("../img/login.png")} />

                <Text style={style.Title}>Cadastro de Clientes</Text>
            </View>

            {/* Inserção de dados para cadastro */}
            <TextInput
                style={style.InputCad}
                placeholder="Nome"
            />
            <TextInput
                style={style.InputCad}
                placeholder="E-mail"
                keyboardType="email-address"
            />
            <TextInput
                style={style.InputTel}
                placeholder="Telefone"
                keyboardType="numeric"
            />
            <TextInput
                style={style.InputCad}
                placeholder="Endereço"
            />
            <View style={style.InputRow}>
                <TextInput
                    style={style.InputRowLine}
                    placeholder="Número"
                    keyboardType="number-pad"
                />
                <TextInput
                    style={style.InputRowLine}
                    placeholder="CEP"
                    keyboardType="number-pad"
                />
            </View>

            <TextInput
                style={style.InputCad}
                placeholder="Cidade"
            />
            <TextInput
                style={style.InputCad}
                placeholder="Estado"
            />

            {/* Area dos botões */}
            <View style={style.AreaButtons1}>
                <TouchableOpacity
                    style={style.Button}
                    title="Cadastrar"
                    onPress={handleCadastrarPress}
                >
                    <Text style={style.Text}>Cadastrar</Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={style.Button}
                    title="Alterar"
                    onPress={handleAlterarPress}
                >
                    <Text style={style.Text}>Alterar</Text>
                </TouchableOpacity>

            </View>

            <View style={style.AreaButtons2}>
                <TouchableOpacity
                    style={style.Button}
                    title="Excluir"
                    onPress={handleExcluirPress}
                >
                    <Text style={style.Text}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.Button}
                    title="Pesquisar"
                    onPress={handlePesquisarPress}
                >
                    <Text style={style.Text}>Pesquisar</Text>
                </TouchableOpacity>
            </View>

            {cadastro && <Text style={style.Text}>{Cadastro()}</Text>}
            {alterar && <Text style={style.Text}>{Altera()}</Text>}
            {excluir && <Text style={style.Text}>{Exclui()}</Text>}
            {pesquisar && <Text style={style.Text}>{Pesquisa()}</Text>}
        </SafeAreaView>
    )
}