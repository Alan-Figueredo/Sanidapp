import { Text, View, StyleSheet } from "react-native"
import Calendario from "../componentes/Calendario"
import { Link } from "react-router-native"
import IconBack from "react-native-vector-icons/Ionicons"
import Dot from "react-native-vector-icons/Octicons"
import Horarios from "../componentes/Horarios"
import { TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignSelf: "center", //centrado para container
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    iconBack: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2,
        marginTop: 18
    },
    calendario: {
        width: "100%"
    }
})
const Cita = () => {
    return (
        <View style={styles.container}>
            <Text style={{alignSelf:"center"}}>Seleccione fecha y hora disponible</Text>
            <Calendario style={styles.calendario} />
            <Horarios />
            <View style={styles.row}>
                <Dot name="dot-fill" style={{ color: "#00cc33" }} size={30} />
                <Text>FECHAS DISPONIBLES</Text>
            </View>
            <View style={styles.row}>
                <Dot name="dot-fill" style={{ color: "#6699CC" }} size={30} />
                <Text>HORAS DISPONIBLES</Text>
            </View>
            <Link component={TouchableOpacity} to="/pedircita"><IconBack name="chevron-back" size={35} style={styles.iconBack} /></Link>
        </View>
    )
}
export default Cita