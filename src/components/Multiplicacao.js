import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Estilos from '../styles/Estilos';

export default Comp => {
    return (
        <TouchableOpacity 
            style={[Estilos.botao, { backgroundColor: '#2ECC71' }]} 
            onPress={function() {
                const n1 = parseFloat(Comp.n1) || 0;
                const n2 = parseFloat(Comp.n2) || 0;
                Comp.funcao(n1 * n2);
            }}
        >
            <Text style={Estilos.textoBotao}>×</Text>
        </TouchableOpacity>
    );
}
