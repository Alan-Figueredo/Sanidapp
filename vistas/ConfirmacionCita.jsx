import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import IconCheck from "react-native-vector-icons/Entypo"
import IconHome from "react-native-vector-icons/Entypo"
import { Link } from "react-router-native"
import { useCitaContext } from "../context/CitaContext"
import { useUsuarioContext } from "../context/UsuarioContext"
const styles = StyleSheet.create({
    container: {
        width: "50%",
        marginTop: 50,
        paddingBottom: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#00cc33',
        color: '#fff',
        backgroundColor: '#00cc33',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 30
    },
    button: {
        minWidth: 170,
        width: "auto",
        borderRadius: 25,
        borderWidth: 1,
        shadowOffset: 1,
        alignItems: "center",
        marginVertical: 10,
    },
    textButton: {
        paddingHorizontal: 5
    },
    iconHome: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 5,
        marginTop: 18
    },
    div: {
        marginBottom: 20,
        alignItems: "center",

    }
})
const ConfirmacionCita = () => {
    const {horario, handleNumeroConsulta, date, misCitas} = useCitaContext();
    const { usuarioSeleccionado } = useUsuarioContext();

    return (
        <View style={styles.container}>
            <IconCheck name="check" size={32} style={styles.icon} />
            <View style={styles.div}>
                <Text>CITA CONFIRMADA</Text>
            </View>
            <View style={styles.div}>
                <Text>{`${usuarioSeleccionado?.nombre} ${usuarioSeleccionado?.apellido}`}</Text>
                <Text>{date}</Text>
            </View>
            <View style={styles.div}>
                <Text>{horario}</Text>
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>AÑADIR A CALENDARIO</Text></TouchableOpacity>
            <Link to="/citatelefonica" component={TouchableOpacity} style={styles.button}><Text style={styles.textButton}>CAMBIAR CITA</Text></Link>
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>ANULAR CITA</Text></TouchableOpacity>
            <Link to="/main" style={{ textDecorationLine: 'none' }} onPress={()=>{handleNumeroConsulta(); misCitas()}}><IconHome name="home" size={30} style={styles.iconHome} /></Link> 
        </View>
    )
}
{/*cambiar una vez tenga BBDD la forma de cambiar el N de cita (handleNumeroConsulta), forma de cambiar N consulta provisoria \\  DATE: buscar forma de que no aparezca formato, sino que se muestre como fecha "viernes 12 de marzo de 2024"*/}
export default ConfirmacionCita