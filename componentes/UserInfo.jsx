import { View, StyleSheet, Text } from "react-native"
import { useUsuarioContext } from "../context/UsuarioContext";

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginTop: 20,
        paddingBottom: 10,
        flex: 1,
        alignSelf: "center",
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    infoUser: {
        borderBottomWidth: 1,
        width: "100%",
        flex: 1,
    }
})
const UserInfo = () => {
    const { usuarioSeleccionado } = useUsuarioContext();
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>NOMBRE:</Text>
                <Text style={styles.infoUser}>{`${usuarioSeleccionado?.nombre} ${usuarioSeleccionado?.apellido}`}</Text> 
            </View>
            <View style={styles.textContainer}>
                <Text>FECHA DE NACIMIENTO:</Text>
                <Text style={styles.infoUser}>{usuarioSeleccionado?.fechaNacimiento}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>Nº DE TARJETA SANITARIA:</Text>
                <Text style={styles.infoUser}>{usuarioSeleccionado?.nTarjetaSanitaria}</Text>
            </View>
        </View>
    )
}
export default UserInfo;