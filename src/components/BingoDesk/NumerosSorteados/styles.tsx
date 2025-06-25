import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    sorteadosTitle: {
        marginTop: 10,
        marginBottom: 2,
        fontSize: 17,
        fontWeight: "bold",
    },
    sorteadosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#e5dfd2",
        borderRadius: 10,
        height: 390,
        width: "95%",
        padding: 15,
        marginBottom: 15,
    },
    sorteadosBgImage: {
        flex: 1,
        height: "100%",
    },
    sorteadosView: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
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