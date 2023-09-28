import { View, StyleSheet } from "react-native";
import UserInfo from "../componentes/UserInfo.jsx"
import UserManagment from "../componentes/UserManagment.jsx"
import Menu from "../componentes/Menu.jsx"
import { useUsuarioContext } from "../context/UsuarioContext.jsx";

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        minHeightheight: 200,
        height: 230
    }
})
const MainScreenContainer = () => {
    return (
        <View>
            <View style={styles.container}>
                <UserManagment />
                <UserInfo />
            </View>
            <Menu />
        </View>
    )
}
export default MainScreenContainer;