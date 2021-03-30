import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import { styles } from './styles'

const Calculadora = ({ navigation }) => {
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
      setnum(y.toFixed(2))
    } else if (perc == undefined) {
      var x = (100 * valor) / num;
      setperc(x.toFixed(2))
    } else {
      setModalVisible(true)
    }
  };

  function close() {
    setModalVisible(false)
  }

  function calcX() {
    var x = (100 * valor) / num;
    setperc(x.toFixed(2))
    setModalVisible(false)
  }

  function calcY() {
    var y = (100 * valor) / perc;
    setnum(y.toFixed(2))
    setModalVisible(false)
  }

  function calcZ() {
    var z = (perc * num) / 100;
    setvalor(z.toFixed(2))
    setModalVisible(false)
  }

  //   Função zerar
  function zerar() {
    setperc(undefined);
    setnum(undefined);
    setvalor(undefined);
  }

  // Váriáveis de Ref
  const PercentRef = useRef();
  const NumberRef = useRef();
  const ValueRef = useRef();

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
                  title="X:   a porcentagem"
                  onPress={() => calcX()}
                ></Button>
                <Button
                  title="Y:   o número"
                  onPress={() => calcY()}
                ></Button>
                <Button
                  title="Z:   o valor final"
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
        {/* Primeira Linha - Porcentagem - X */}
        <View style={styles.Row}>
          {/* Input */}
          <TextInput
            placeholder={"x"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.Input}
            onChangeText={(value) => {
              setperc(Number(value));
              setcontador(+1);
            }}
            ref={PercentRef}
            onSubmitEditing={() => NumberRef.current.focus()}
            returnKeyType="next"
          >
            <Text>{perc}</Text>
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
            placeholderTextColor={plcHoldColor}
            style={styles.Input}
            onChangeText={(value) => {
              setnum(Number(value));
              setcontador(+1);
            }}
            ref={NumberRef}
            onSubmitEditing={() => ValueRef.current.focus()}
            returnKeyType="next"
          >
            <Text>{num}</Text>
          </TextInput>
        </View>

        {/* Terceira Linha - resultado - Z */}
        <View style={styles.Row}>
          <Text style={styles.Text}>= </Text>
          <TextInput
            placeholder={"z"}
            keyboardType="number-pad"
            placeholderTextColor={plcHoldColor}
            style={styles.Input}
            onChangeText={(value) => {
              setvalor(Number(value));
              setcontador(+1);
            }}
            ref={ValueRef}
            returnKeyType="done"
          >
            <Text>{valor}</Text>
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

export default Calculadora;
