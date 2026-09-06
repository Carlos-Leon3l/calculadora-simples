import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#E8ECF1", // Fundo moderno cinza/azulado
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 32,
        fontWeight: '900',
        color: '#2C3E50',
        marginBottom: 30,
        letterSpacing: 1,
        textAlign: 'center'
    },
    cardInput: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // Sombra flutuante (Android)
    },
    label: {
        fontSize: 14,
        color: '#7F8C8D',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 8,
        marginLeft: 5,
    },
    input: {
        height: 60,
        backgroundColor: '#F7F9FC',
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 25,
    },
    botao: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35, // Círculo perfeito
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 34,
        fontWeight: 'bold',
    },
    cardResultado: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    labelResultado: {
        fontSize: 16,
        color: '#7F8C8D',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 10,
    },
    valorResultado: {
        fontSize: 48,
        fontWeight: '900',
        color: '#2980B9',
    }
});
