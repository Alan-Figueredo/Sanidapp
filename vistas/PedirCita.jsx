import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import IconBack from "react-native-vector-icons/Ionicons"
import IconDoc from "react-native-vector-icons/MaterialCommunityIcons"
import Phone from "react-native-vector-icons/FontAwesome5"
import { Link } from "react-router-native";
import { useCitaContext } from "../context/CitaContext";
import { useUsuarioContext } from "../context/UsuarioContext";
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "50%",
        alignItems: "center", // centrado para iconos
        alignSelf: "center", //centrado para container
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#6699CC',
        color: '#fff',
        backgroundColor: '#6699CC',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    iconBack: {
        color: "white",
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2
    }
    ,
    button: {
        minWidth: 120,
        width: "auto",
        borderRadius: 25,
        borderWidth: 1,
        shadowOffset: 1,
        alignItems: "center",
        marginVertical: 10
    },
    textButton: {
        paddingHorizontal: 10,
    },
    div: {
        alignSelf: "center",
        alignItems: "center",
        marginVertical: 10
    },
    link: {
        textDecorationLine: "none",
        textDecorationColor: "none",
        textDecorationStyle: "none"
    }
})

const PedirCita = () => {
    const { handleTipoCita } = useCitaContext();
    const { usuarioSeleccionado } = useUsuarioContext();

    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Icon name="user" size={80} style={styles.icon} />
                <Text>{`${usuarioSeleccionado?.nombre} ${usuarioSeleccionado?.apellido}`}</Text>
                <Text>{usuarioSeleccionado?.fechaNacimiento}</Text>
                <Text>{usuarioSeleccionado?.nTarjetaSanitaria}</Text>
            </View>
            <View style={styles.div}>
                <IconDoc name="doctor" size={35} style={styles.icon} />
                <Link component={TouchableOpacity} onPress={()=>{handleTipoCita("CITA PRESENCIAL")}} style={styles.button} to="/cita"><Text style={styles.textButton}>CITA PRESENCIAL</Text></Link>
                <Phone name="phone" size={32} style={styles.icon} />
                <Link component={TouchableOpacity} onPress={()=>{handleTipoCita("CITA TELEFÓNICA")}} style={[styles.button, styles.link]} to="/cita"><Text style={styles.textButton}>CITA TELEFÓNICA</Text></Link>
            </View>
            <Link style={{ textDecorationLine: 'none' }} to="/main"><IconBack name="chevron-back" size={35} style={styles.iconBack} /></Link>
        </View>
    )
}
export default PedirCita