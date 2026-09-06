import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Keyboard, ScrollView } from 'react-native';
import Estilos from '../styles/Estilos';
import Soma from '../components/Soma';
import Subtracao from '../components/Subtracao';
import Multiplicacao from '../components/Multiplicacao';
import Divisao from '../components/Divisao';
import Resultado from '../components/Resultado';

export default () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [res, setRes] = useState(null);

    function exibirResultado(valor) {
        Keyboard.dismiss();
        setRes(valor);
    }

    return (
        <SafeAreaView style={Estilos.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 40}}>
                <Text style={Estilos.titulo}>Calculadores Simples</Text>
                
                <View style={Estilos.cardInput}>
                    <Text style={Estilos.label}>Primeiro Valor</Text>
                    <TextInput 
                        style={Estilos.input}
                        placeholder="0"
                        placeholderTextColor="#BDC3C7"
                        keyboardType="numeric"
                        value={n1}
                        onChangeText={setN1}
                    />
                </View>
                
                <View style={Estilos.cardInput}>
                    <Text style={Estilos.label}>Segundo Valor</Text>
                    <TextInput 
                        style={Estilos.input}
                        placeholder="0"
                        placeholderTextColor="#BDC3C7"
                        keyboardType="numeric"
                        value={n2}
                        onChangeText={setN2}
                    />
                </View>

                <View style={Estilos.linhaBotoes}>
                    <Soma n1={n1} n2={n2} funcao={exibirResultado} />
                    <Subtracao n1={n1} n2={n2} funcao={exibirResultado} />
                    <Multiplicacao n1={n1} n2={n2} funcao={exibirResultado} />
                    <Divisao n1={n1} n2={n2} funcao={exibirResultado} />
                </View>

                <Resultado valor={res} />
            </ScrollView>
        </SafeAreaView>
    );
}
