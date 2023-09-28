import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useUsuarioContext } from "../context/UsuarioContext"
import Icon from 'react-native-vector-icons/Feather';
import { Link } from "react-router-native";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingBottom: 10,
        gap: 35,
        alignSelf: 'center',
    },
    iconWrapper: {
        alignItems: 'center',
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#6699CC',
        color: '#fff',
        backgroundColor: '#6699CC',
        paddingVertical: 8,
        paddingHorizontal: 8,

    },
    button: {
        minWidth: 80,
        width: 'auto',
        paddingHorizontal: 5,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    cambioUsuario: {
        fontSize: 25,
        alignSelf: "center",
        paddingBottom: 10,
        marginTop: -10
    },
    usuarioContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    iconBack: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2,
        marginTop: 18,
    }
});
const handleCambioUsuario = (userArray, i, user, setUsuarios, setUsuarioSeleccionado) => {
    setUsuarioSeleccionado()
    const newArray = [...userArray];

    // Hace que ningun usuario tenga la propiedad perfilSeleccionado activo
    newArray.forEach((object) => {
        object.perfilSeleccionado = false
    })
    // Encuentra el objeto que deseas actualizar
    const indexToUpdate = newArray.findIndex(user => (user.id - 1) === i);

    // Verifica si se encontró el objeto
    if (indexToUpdate !== -1) {
        // Actualiza el valor del objeto en la copia del array
        newArray[indexToUpdate] = { ...newArray[indexToUpdate], perfilSeleccionado: true };

        // Establece el nuevo array en el estado
        setUsuarios(newArray);
    }
}
const SeleccionarUsuario = () => {
    const { usuarios, setUsuarios, setUsuarioSeleccionado } = useUsuarioContext();

    return (
        <View style={styles.container}>
            <Text style={styles.cambioUsuario}>Bienvenido a Sanidapp</Text>
            <View style={{ alignSelf: "center" }}>
                <IconMaterial name="swap-horizontal" size={35} color="#6699CC" style={styles.icon} />
            </View>
            <Text style={styles.cambioUsuario}>Seleccione su usuario</Text>
            <View style={styles.usuarioContainer}>
                {usuarios.map((usuario, index) => {
                    return (
                        <View key={index}>
                            <Link to="/main" onPress={() => { handleCambioUsuario(usuarios, index, usuario, setUsuarios, setUsuarioSeleccionado) }} >
                                <Icon name="user" size={35} style={styles.icon} />
                            </Link>
                            <Text style={{ alignSelf: "center" }}>{usuario.nombre}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
export default SeleccionarUsuario;