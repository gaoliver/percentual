import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import { styles } from "./styles";

const Crescimento = ({ navigation }) => {
  // Back-end
  const [primeiro, setprimeiro] = useState(undefined);
  const [final, setfinal] = useState(undefined);
  const [perc, setperc] = useState(undefined);
  const [plcHoldColor, setplcHoldColor] = useState("#cecece");
  const [contador, setcontador] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);

  // Alerta de Regras
  const rules = () => {
    return Alert.alert(
      "Fora da regra",
      "O PRIMEIRO VALOR não pode estar em branco." +
        "\n\nPor favor, defina o PRIMEIRO VALOR e a PORCENTAGEM, para descobrir o VALOR POSTERIOR." +
        "\n\nDefina o PRIMEIRO VALOR e o VALOR FINAL, para descobrir a MARGEM."
    );
  };

  //   Função calcular
  const calc = () => {
    if (primeiro == undefined) {
      rules();
    } else if (final == undefined) {
      let x = (perc / 100) * primeiro;
      let y = primeiro + x;
      setfinal(y.toFixed(2));
    } else if (perc == undefined) {
      let diff = final - primeiro;
      let x = (diff * 100) / primeiro;
      setperc(x.toFixed(2));
    } else {
      setModalVisible(true);
    }
  };

  function close() {
    setModalVisible(false);
  }

  function calcPrimeiro() {
    rules();
    setModalVisible(false);
  }

  function calcFinal() {
    if (primeiro == undefined || primeiro <= 0) {
      rules();
      setModalVisible(false);
    } else {
      let x = (perc / 100) * primeiro;
      let y = primeiro + x;
      setfinal(y.toFixed(2));
      setModalVisible(false);
    }
  }

  function calcPerc() {
    if (primeiro == undefined || primeiro <= 0) {
      rules();
      setModalVisible(false);
    } else {
      let diff = final - primeiro;
      let x = (diff / 100) * primeiro;
      setfinal(x.toFixed(2));
      setModalVisible(false);
    }
  }

  //   Função zerar
  const zerar = () => {
    setperc(undefined);
    setprimeiro(undefined);
    setfinal(undefined);
  };

  // Fim do back-end

  return (
    <View style={styles.container}>
      {/* Modal para calcular novamente */}
      <Modal visible={ModalVisible} animationType="slide" transparent={true}>
        <View style={styles.ModalFundo}>
          <View style={styles.Modal}>
            <Text style={styles.ModalTitle}>Qual final deseja descobrir?</Text>
            <View style={styles.ModalButtons}>
              <View style={styles.ModalButtonsIn}>
                <Button
                  title="o primeiro"
                  onPress={() => calcPrimeiro()}
                ></Button>
                <Button title="o final" onPress={() => calcFinal()}></Button>
                <Button
                  title="a porcentagem"
                  onPress={() => calcPerc()}
                ></Button>
              </View>
              <Button
                title="Cancelar"
                color="grey"
                onPress={() => close()}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.Caixa}>
        {/* Primeira Linha - Primeiro valor - X */}
        <View style={{ ...styles.Col, alignItems: "center" }}>
          {/* Input */}
          <Text style={{ ...styles.Text, fontSize: 15, fontWeight: "bold" }}>
            Primeiro valor
          </Text>
          <TextInput
            placeholder={"0.00"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.InputCresc}
            onChangeText={(value) => {
              setprimeiro(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{primeiro}</Text>
          </TextInput>
        </View>

        {/* Segunda Linha - Valor final - Y */}
        <View style={{ ...styles.Col, alignItems: "center" }}>
          <Text style={{ ...styles.Text, fontSize: 15, fontWeight: "bold" }}>
            Valor final
          </Text>
          <TextInput
            placeholder={"0.00"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.InputCresc}
            onChangeText={(value) => {
              setfinal(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{final}</Text>
          </TextInput>
        </View>

        {/* Terceira Linha - Porcentagem de Crescimento - Z */}
        <View style={{ ...styles.Col, alignItems: "center" }}>
          <Text style={{ ...styles.Text, fontSize: 15, fontWeight: "bold" }}>
            Margem(%)
          </Text>
          <TextInput
            placeholder={"0%"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.Input}
            onChangeText={(value) => {
              setperc(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{perc}</Text>
          </TextInput>
        </View>
      </View>

      {/* Botões principais */}
      <View style={styles.Row}>
        {/* Botão calcular */}
        <TouchableOpacity style={styles.Button} onPress={() => calc()}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>

        {/* Espaçamento */}
        <View style={{ width: 20 }}></View>

        {/* Botão Zerar */}
        <TouchableOpacity style={styles.Button} onPress={() => zerar()}>
          <Text style={styles.btnText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Crescimento;
