import { StyleSheet } from "react-native";
import Colors from '../Constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Header: {
    flex: 0.4,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 30,
  },
  Title: {
    color: Colors.light,
    fontSize: 36,
  },
  Caixa: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light,
    height: 300,
    width: 300,
    marginTop: 20,
    borderRadius: 150,
  },
  Row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  Col: {
    flexDirection: "column",
    marginVertical: 5,
  },
  Input: {
    width: 100,
    backgroundColor: Colors.grey,
    color: Colors.light,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
 InputCresc: {
    width: 200,
    backgroundColor: Colors.grey,
    color: Colors.light,
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
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnText: {
    fontSize: 18,
    color: Colors.light,
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
    backgroundColor: Colors.light,
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
