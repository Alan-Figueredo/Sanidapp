import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Horas from "../horarioCitas.json";
import { TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { useCitaContext } from "../context/CitaContext"

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    button: {
        width: "auto",
        borderRadius: 25,
        borderWidth: 1,
        shadowOffset: 1,
        alignItems: "center",
        marginVertical: 3,
        paddingHorizontal: 5,
        marginHorizontal: 3
    },

})

const Horarios = () => {
    const { handleHorario, date } = useCitaContext();
    // Variable para llevar el conteo de elementos
    let conteo = 0;

    // Array para almacenar los elementos en grupos de 6
    const elementosPorGrupo = [];

    // Itera sobre los horarios
    Horas.horarios.forEach((hora, index) => {
        // Incrementa el conteo en cada iteración
        conteo++;

        // Crea un nuevo grupo cada vez que se llega a un múltiplo de 6
        if (conteo % 6 === 1) {
            elementosPorGrupo.push([]);
        }

        // Agrega el elemento al último grupo
        elementosPorGrupo[elementosPorGrupo.length - 1].push(
            <Link to={date ? "/detallecitatelefonica" : ""} onPress={() => { handleHorario(hora); !date && Alert.alert("Atención!", "Debes de seleccionar la fecha para avanzar") }} compontent={TouchableOpacity} style={styles.button} key={index}>
                <Text>{hora}</Text>
            </Link>
        );
    });

    return (
        <View style={styles.row}>
            {elementosPorGrupo.map((grupo, index) => (
                <View key={index}>
                    {grupo.map((elemento) => elemento)}
                </View>
            ))}
        </View>
    );
};

export default Horarios;