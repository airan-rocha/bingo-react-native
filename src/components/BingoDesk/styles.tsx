import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
  ultimosSorteadosTitle: {
    fontSize: 12,
    marginBottom: 2,
  },
  ultimosSorteadosContainer:{
    flexDirection: "row",
    backgroundColor: "#ffebcd",
    alignItems: "center",
    marginBottom: 10,
    height: 45,
    minWidth: 120,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  sorteadosTitle: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 17,
    fontWeight: "bold",
  },
  sorteadosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#998a66",
    minHeight: 400,
    width: "95%",
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