import { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableHighlight, ScrollView, Alert, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import { useUsuarioContext } from "../context/UsuarioContext";
import { Link } from "react-router-native";
import IconBack from "react-native-vector-icons/Ionicons"


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingBottom: 10,
        gap: 35,
        alignSelf: 'center',
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#6699CC',
        color: '#fff',
        backgroundColor: '#6699CC',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 15,

    },
    button: {
        minWidth: 80,
        width: 'auto',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18
    },
    nuevoUsuario: {
        fontSize: 25,
        alignSelf: "center",
        paddingBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginTop: 3,
        marginBottom: 10
    },
    iconBack: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2,
        marginTop: 18
    },
    labelContainer: {
        flexDirection: "row"
    },
    required: {
        color: "red",
        marginLeft: 5
    }
});
const NuevoUsuario = () => {
    const { nuevoUsuario } = useUsuarioContext();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [correo, setCorreo] = useState();
    const [nTarjetaSanitaria, setNTarjetaComunitaria] = useState();
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const [fotoPerfil, setFotoPerfil] = useState();

    const handleSubmit = (evt) => {
        if (!nombre || !apellido || !fechaNacimiento || !nTarjetaSanitaria || !correo) {
            evt.preventDefault();
            Alert.alert("Atención!", "Todos los campos con marca en rojo deben ser rellenados")
        } else {
            const infoNuevoUsuario = {
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                nTarjetaSanitaria: nTarjetaSanitaria,
                fotoPerfil: fotoPerfil,
                perfilSeleccionado: false,
                correo: correo
            }
            nuevoUsuario(infoNuevoUsuario);
            Alert.alert("Nuevo usuario creado!", "Puede visualizarlo en la sección de cambio de usuarios")
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={{ alignSelf: "center" }}>
                <Icon name="user-plus" size={35} style={styles.icon} />
            </View>
            <Text style={styles.nuevoUsuario}>Añadir usuario</Text>
            <View>
                <View style={styles.labelContainer}>
                    <Text>Nombre</Text>
                    <Text style={styles.required}>*</Text>
                </View>
                <TextInput style={styles.input} onChangeText={(text) => setNombre(text)} />
            </View>
            <View>
                <View style={styles.labelContainer}>
                    <Text>Apellidos</Text>
                    <Text style={styles.required}>*</Text>
                </View>
                <TextInput style={styles.input} onChangeText={(text) => setApellido(text)} />
            </View>
            <View>
                <View style={styles.labelContainer}>
                    <Text>Correo</Text>
                    <Text style={styles.required}>*</Text>
                </View>
                <TextInput autoComplete="email" inputMode="email" style={styles.input} onChangeText={(text) => setCorreo(text)} />
            </View>
            <View>
                <View style={styles.labelContainer}>
                    <Text>Número de tarjeta sanitaria</Text>
                    <Text style={styles.required}>*</Text>
                </View>
                <TextInput style={styles.input} onChangeText={(text) => setNTarjetaComunitaria(text)} />
            </View>
            <View>
                <View style={styles.labelContainer}>
                    <Text>Fecha de nacimiento</Text>
                    <Text style={styles.required}>*</Text>
                </View>
                <TextInput style={styles.input} onChangeText={(text) => setFechaNacimiento(text)} />
            </View>
            <View>
                <Text>Foto de perfil</Text>
                <TextInput style={styles.input} onChangeText={(text) => setFotoPerfil(text)} />
            </View>
            <View style={{ alignSelf: "center", }}>
                <Link to="/main" component={TouchableHighlight} onPress={handleSubmit} style={styles.button}><Text style={styles.buttonText}>Guardar</Text></Link>
            </View>
            <Link component={TouchableOpacity} to="/main"><IconBack name="chevron-back" size={35} style={styles.iconBack} /></Link>
        </ScrollView>
    )
}
export default NuevoUsuario