import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textUltimoSorteado: {
    backgroundColor: "#000000",
    color: "#fff",
    fontSize: 35,
    borderRadius: 50,
    width: 60,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 15,
  },
  sorteadosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#998a66",
    height: 430,
    width: "100%",
    padding: 15,
    marginBottom: 30,
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