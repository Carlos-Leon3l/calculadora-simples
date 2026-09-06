import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Estilos from '../styles/Estilos';

export default Comp => {
    return (
        <TouchableOpacity 
            style={[Estilos.botao, { backgroundColor: '#F1C40F' }]} 
            onPress={function() {
                const n1 = parseFloat(Comp.n1) || 0;
                const n2 = parseFloat(Comp.n2) || 0;
                if (n2 === 0) {
                    Comp.funcao('Erro');
                } else {
                    let res = n1 / n2;
                    if(res % 1 !== 0) res = parseFloat(res.toFixed(4));
                    Comp.funcao(res);
                }
            }}
        >
            <Text style={[Estilos.textoBotao, { color: '#FFF' }]}>÷</Text>
        </TouchableOpacity>
    );
}
