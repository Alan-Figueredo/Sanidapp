import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        width: "auto",
        marginTop: 20,
        paddingBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    icon: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#6699CC",
        color: "#fff",
        backgroundColor: "#6699CC",
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignSelf: "center"
    },
    iconContainer: {
        justifyContent: "center",
        marginBottom: 20
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
        paddingHorizontal: 10
    }
})

const Menu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon name="calendar" style={styles.icon} size={45} color="#6699CC" />
                    <Link to="/pedircita" component={TouchableOpacity} activeOpacity={0.1}  style={styles.button}><Text>PEDIR CITA</Text></Link>
                </View>
                <View>
                    <Icon name="map-marker-alt" style={styles.icon} size={45} color="#6699CC" />
                    <TouchableOpacity style={styles.button}><Text style={styles.textButton}>DIRECTORIO</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <IconFontisto name="test-tube-alt" style={styles.icon} size={45} color="#6699CC" />
                    <TouchableOpacity style={styles.button}><Text style={styles.textButton}>LABORATORIO</Text></TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="info" style={styles.icon} size={45} color="#6699CC" />
                    <TouchableOpacity style={styles.button}><Text style={styles.textButton}>+ INFO</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Menu