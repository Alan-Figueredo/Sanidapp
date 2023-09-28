import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useCitaContext } from "../context/CitaContext";
import { Link } from "react-router-native";
import IconBookMedical from "react-native-vector-icons/FontAwesome5"

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginTop: 20,
        paddingBottom: 10,
        alignSelf: "center",
    },
    citas: {
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    button: {
        borderRadius: 25,
        borderWidth: 1,
        shadowOffset: 1,
        alignItems: "center",
        marginVertical: 10,
        alignSelf:"center"
    },
    textButton: {
        paddingHorizontal: 10
    },
    misCitas: {
        fontSize: 25,
        alignSelf: "center",
        paddingBottom: 10
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#6699CC',
        backgroundColor: "#6699CC",
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
        alignSelf:"center"
    },
    iconBack: {
        color: "white",
        alignSelf: "center", // centrado para iconos
        backgroundColor: "#666666",
        borderRadius: 50,
        padding: 2,
        marginTop: 18
    }
})

const MisCitas = () => {
    const { citas } = useCitaContext();

    return (
        <View style={styles.container}>
            <IconBookMedical name="book-medical" size={32} style={styles.icon} />
            <Text style={styles.misCitas}>Mis citas</Text>
            {citas.length === 0 ?
                <View>
                    <Text style={{alignSelf:"center"}}>No se encontró ninguna cita agendada, por favor dirijase a la pantalla principal para agendar una cita</Text>
                    <Link to="/main" component={TouchableOpacity} style={[styles.button, {marginTop:20}]}><Text style={styles.textButton}>Pantalla principal</Text></Link>
                </View>
                :
                citas.map((cita, index) => {
                    return (
                        <View style={styles.citas} key={index}>
                            <Text>Horario: {cita.horario}</Text>
                            <Text>Fecha: {cita.fecha}</Text>
                            <Text>Tipo de cita: {cita.tipoCita}</Text>
                            {cita.tipoCita === "CITA PRESENCIAL" && <Text>Doctor: Juan Peralta</Text>}
                            {cita.tipoCita === "CITA PRESENCIAL" && <Text>Centro: San Miguel</Text>}
                        </View>
                    )
                })
            }
        </View>
    )
}
{/*Una vez conectada a la BBDD cambiar la forma en la que se despliega la informacion del centro y del doctor*/}
export default MisCitas;