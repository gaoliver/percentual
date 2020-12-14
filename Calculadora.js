import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

export default class Calculadora extends Component {
  // Back-end

  state = {
    perc: undefined,
    num: undefined,
    valor: undefined,
    plcHoldColor: "#cecece",
    contador: 0,
    ModalVisible: false,
  };

  //   Função calcular
  calc() {
    if (this.state.valor == undefined) {
      var z = (this.state.perc * this.state.num) / 100;
      this.setState({
        valor: z,
      });
    } else if (this.state.num == undefined) {
      var y = (100 * this.state.valor) / this.state.perc;
      this.setState({
        num: y,
      });
    } else if (this.state.perc == undefined) {
      var x = (100 * this.state.valor) / this.state.num;
      this.setState({
        perc: x,
      });
    } else {
      this.setState({
        ModalVisible: true,
      });
    }
  }

  close() {
    this.setState({
      ModalVisible: false,
    });
  }

  calcX() {
    var x = (100 * this.state.valor) / this.state.num;
    this.setState({
      perc: x,
    });

    this.setState({
      ModalVisible: false,
    });
  }

  calcY() {
    var y = (100 * this.state.valor) / this.state.perc;
    this.setState({
      num: y,
    });

    this.setState({
      ModalVisible: false,
    });
  }

  calcZ() {
    var z = (this.state.perc * this.state.num) / 100;
    this.setState({
      valor: z,
    });

    this.setState({
      ModalVisible: false,
    });
  }

  //   Função zerar
  zerar() {
    this.setState({
      perc: undefined,
      num: undefined,
      valor: undefined,
    });
  }

  // Fim do back-end

  render() {
    return (
      <>
        {/* Modal para calcular novamente */}
        <Modal
          visible={this.state.ModalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.ModalFundo}>
            <View style={styles.Modal}>
              <Text style={styles.ModalTitle}>
                Qual valor deseja descobrir?
              </Text>
              <View style={styles.ModalButtons}>
                <View style={styles.ModalButtonsIn}>
                  <Button
                    title="X:   a porcentagem"
                    onPress={() => this.calcX()}
                  ></Button>
                  <Button
                    title="Y:   o número"
                    onPress={() => this.calcY()}
                  ></Button>
                  <Button
                    title="Z:   o valor final"
                    onPress={() => this.calcZ()}
                  ></Button>
                </View>
                <Button
                  title="Cancelar"
                  color="grey"
                  onPress={() => this.close()}
                ></Button>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.Caixa}>
          {/* Primeira Linha - Porcentagem - X */}
          <View style={styles.Row}>
            {/* Input */}
            <TextInput
              placeholder={"x"}
              keyboardType="number-pad"
              placeholderTextColor={this.state.plcHoldColor}
              style={styles.Input}
              onChangeText={(valor) => {
                this.setState({ perc: valor, contador: +1 });
              }}
            >
              <Text>{this.state.perc}</Text>
            </TextInput>
            {/* Símbolo */}
            <Text style={styles.Text}>%</Text>
          </View>

          {/* Segunda Linha - Valor de referência - Y */}
          <View style={styles.Row}>
            <Text style={styles.Text}>de </Text>
            <TextInput
              placeholder={"y"}
              keyboardType="number-pad"
              placeholderTextColor={this.state.plcHoldColor}
              style={styles.Input}
              onChangeText={(valor) => {
                this.setState({ num: valor, contador: +1 });
              }}
            >
              <Text>{this.state.num}</Text>
            </TextInput>
          </View>

          {/* Terceira Linha - resultado - Z */}
          <View style={styles.Row}>
            <Text style={styles.Text}>= </Text>
            <TextInput
              placeholder={"z"}
              keyboardType="number-pad"
              placeholderTextColor={this.state.plcHoldColor}
              style={styles.Input}
              onChangeText={(value) => {
                this.setState({ valor: value, contador: +1 });
              }}
            >
              <Text>{this.state.valor}</Text>
            </TextInput>
          </View>

          {/* <Text>
          X: {this.state.perc}, Y: {this.state.num}, Z: {this.state.valor}
        </Text> */}
        </View>

        {/* Botões principais */}
        <View style={styles.Row}>
          {/* Botão calcular */}
          <TouchableOpacity style={styles.Button} onPress={() => this.calc()}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>

          {/* Espaçamento */}
          <View style={{ width: 20 }}></View>

          {/* Botão Zerar */}
          <TouchableOpacity style={styles.Button} onPress={() => this.zerar()}>
            <Text style={styles.btnText}>Zerar</Text>
          </TouchableOpacity>
        </View>

        {/* Botao de Ajuda */}
        <View style={{ position: "absolute", top: 750 }}>
          <TouchableOpacity
            style={styles.btnHelp}
            onPress={() =>
              Alert.alert(
                "Como usar?",
                "Altere os valores dos campos desejados e deixe zerado apenas o que deseja calcular. Depois, toque o botão CALCULAR para ver o resultado." +
                  "\n" +
                  "\nPara realizar a operação novamente, toque o botão ZERAR."
              )
            }
          >
            <Text style={styles.btnTextHelp}>Como usar?</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
    width: '100%',
    height: 130,
    justifyContent: 'space-between'
  }
});
