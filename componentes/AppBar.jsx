import { View, StyleSheet, Text, Image } from "react-native"
import Constants from "expo-constants"
import { Link } from "react-router-native"
import Sidebar from "./SideBar"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 20,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        alignItems: "center",
        zIndex: 999
    },
    logo: {
        height: 42,
        width: 43
    },
    blurContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el efecto de desenfoque
        backdropFilter: 'blur(5px)', // Aplicar el efecto de desenfoque
    },
})

const AppBarTab = ({ active, children, to }) => {
    return (
        <Link to={to} style={{ textDecorationLine: 'none' }}>
            {children}
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Sidebar style={styles.blurContainer} />
            <AppBarTab active to="/main"><Image style={styles.logo} source={require("../assets/Sanidapp.png")} /></AppBarTab>
        </View>
    )
}
export default AppBar