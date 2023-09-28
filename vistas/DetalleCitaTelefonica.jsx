import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { Link } from "react-router-native"
import IconBack from "react-native-vector-icons/Ionicons"
import Phone from "react-native-vector-icons/FontAwesome5"
import IconDoc from "react-native-vector-icons/MaterialCommunityIcons"
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
        borderColor: '#6699CC',
        color: '#fff',
        backgroundColor: '#6699CC',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 30
    },
    button: {
        minWidth: 120,
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
    iconBack: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2,
        marginTop: 18
    },
    div: {
        marginBottom: 20,
        alignItems: "center",

    }
})
const DetalleCitaTelefonica = () => {
    const { horario, numeroConsulta, date, tipoCita } = useCitaContext();
    const { usuarioSeleccionado } = useUsuarioContext();

    return (
        <View style={styles.container}>
            {tipoCita === "CITA PRESENCIAL" ?
                <IconDoc name="doctor" size={35} style={styles.icon} /> :
                <Phone name="phone" size={32} style={styles.icon} />
            }

            <View style={styles.div}>
                <Text>{tipoCita}</Text>
            </View>
            <View style={styles.div}>
                <Text>{`${usuarioSeleccionado?.nombre} ${usuarioSeleccionado?.apellido}`}</Text>
                <Text>Centro de salud San Miguel</Text>
                <Text>C/ San Miguel 18</Text>
                <Text>Consulta {numeroConsulta}</Text>
            </View>
            <View style={styles.div}>
                <Text>{date}</Text>
            </View>
            <View style={styles.div}>
                <Text>{horario}</Text>
            </View>
            <Link to="/confirmacioncita" component={TouchableOpacity} style={styles.button}><Text style={styles.textButton}>CONFIRMAR CITA</Text></Link>
            <Link to="/cita" style={{ textDecorationLine: 'none' }}><IconBack name="chevron-back" size={35} style={styles.iconBack} /></Link>
        </View>
    )
}
export default DetalleCitaTelefonica