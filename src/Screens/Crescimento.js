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
  const [perc, setperc] = useState(undefined);
  const [num, setnum] = useState(undefined);
  const [valor, setvalor] = useState(undefined);
  const [plcHoldColor, setplcHoldColor] = useState("#cecece");
  const [contador, setcontador] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);

  //   Função calcular
  const calc = () => {
    if (valor == undefined) {
      var z = (perc * num) / 100;
      setvalor(z.toFixed(2));
    } else if (num == undefined) {
      var y = (100 * valor) / perc;
      setnum(y.toFixed(2));
    } else if (perc == undefined) {
      var x = (100 * valor) / num;
      setperc(x.toFixed(2));
    } else {
      setModalVisible(true);
    }
  };

  function close() {
    setModalVisible(false);
  }

  function calcX() {
    var x = (100 * valor) / num;
    setperc(x.toFixed(2));
    setModalVisible(false);
  }

  function calcY() {
    var y = (100 * valor) / perc;
    setnum(y.toFixed(2));
    setModalVisible(false);
  }

  function calcZ() {
    var z = (perc * num) / 100;
    setvalor(z.toFixed(2));
    setModalVisible(false);
  }

  //   Função zerar
  function zerar() {
    setperc(undefined);
    setnum(undefined);
    setvalor(undefined);
  }

  // Fim do back-end

  return (
    <View style={styles.container}>
      {/* Modal para calcular novamente */}
      <Modal visible={ModalVisible} animationType="slide" transparent={true}>
        <View style={styles.ModalFundo}>
          <View style={styles.Modal}>
            <Text style={styles.ModalTitle}>Qual valor deseja descobrir?</Text>
            <View style={styles.ModalButtons}>
              <View style={styles.ModalButtonsIn}>
                <Button
                  title="X:   o anterior"
                  onPress={() => calcX()}
                ></Button>
                <Button
                  title="Y:   o posterior"
                  onPress={() => calcY()}
                ></Button>
                <Button
                  title="Z:   a porcentagem"
                  onPress={() => calcZ()}
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
        {/* Primeira Linha - Valor Anterior - X */}
        <View style={{...styles.Col, alignItems: 'center'}}>
          {/* Input */}
          <Text style={{ ...styles.Text, fontSize: 15, fontWeight: "bold" }}>
            Valor Anterior
          </Text>
          <TextInput
            placeholder={"Anterior"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.InputCresc}
            onChangeText={(value) => {
              setperc(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{perc}</Text>
          </TextInput>
        </View>

        {/* Segunda Linha - Valor Posterior - Y */}
        <View style={{ ...styles.Col, alignItems: "center" }}>
          <Text style={{ ...styles.Text, fontSize: 15, fontWeight: "bold" }}>
            Valor Posterior
          </Text>
          <TextInput
            placeholder={"Posterior"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.InputCresc}
            onChangeText={(value) => {
              setnum(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{num}</Text>
          </TextInput>
        </View>

        {/* Terceira Linha - Porcentagem de Crescimento - Z */}
        <View style={{...styles.Row, marginTop: 20}}>
          <TextInput
            placeholder={"Crescimento"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={{ ...styles.Input, fontSize: 15, width: 110 }}
            onChangeText={(value) => {
              setvalor(Number(value));
              setcontador(+1);
            }}
          >
            <Text>{valor}</Text>
          </TextInput>
          <Text style={styles.Text}>%</Text>
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
