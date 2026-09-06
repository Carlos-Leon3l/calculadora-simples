import React from 'react';
import { View, Text } from 'react-native';
import Estilos from '../styles/Estilos';

export default Comp => {
    return (
        <View style={Estilos.cardResultado}>
            <Text style={Estilos.labelResultado}>Resultado</Text>
            <Text style={Estilos.valorResultado}>
                {Comp.valor !== null ? Comp.valor : '---'}
            </Text>
        </View>
    );
}
