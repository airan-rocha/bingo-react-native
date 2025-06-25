import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ultimoSorteadoContainer: {
        flexDirection: 'row',
        left: -20,
    },
    textColuna: {
        backgroundColor: "#bf1212",
        color: "#fff",
        fontSize: 25,
        borderRadius: 50,
        width: 40,
        height: 40,
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 15,
    },
    textUltimoSorteado: {
        backgroundColor: "#000000",
        color: "#fff",
        fontSize: 50,
        borderRadius: 50,
        width: 80,
        height: 80,
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 15,
    },
    ultimosSorteadosTitle: {
        fontSize: 12,
        marginBottom: 2,
    },
    ultimosSorteadosContainer:{
        flexDirection: "row",
        backgroundColor: "#e5dfd2",
        alignItems: "center",
        marginBottom: 10,
        height: 45,
        minWidth: 120,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    sorteadosText: {
        backgroundColor: "#000000",
        color: "#fff",
        margin: 5,
        borderRadius: 25,
        width: 30,
        height: 30,
        textAlign: "center",
        textAlignVertical: "center",
    },
});