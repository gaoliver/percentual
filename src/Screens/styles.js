import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Caixa: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: 300,
    width: 300,
    marginTop: 20,
    borderRadius: 150,
  },
  Row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  Input: {
    width: 100,
    backgroundColor: "#333",
    color: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  Text: {
    color: "#000",
    fontSize: 30,
  },
  Button: {
    width: 90,
    height: 90,
    backgroundColor: "#248ef2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnText: {
    fontSize: 18,
    color: "#FFF",
  },
  btnHelp: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#444",
    justifyContent: "center",
    borderRadius: 20,
  },
  btnTextHelp: {
    fontSize: 20,
    color: "#fffff9",
  },
  ModalFundo: {
    backgroundColor: "#000a",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Modal: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  ModalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  ModalButtons: {
    width: "90%",
    height: 195,
    justifyContent: "space-between",
  },
  ModalButtonsIn: {
    width: "100%",
    height: 130,
    justifyContent: "space-between",
  },
});
