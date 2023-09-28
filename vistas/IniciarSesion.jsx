import { Text, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container:{

        },
        text:{

        },
        input:{
            borderWidth:2,
            borderColor:"gray",
            borderRadius:"50%"
        }
    }
)

function IniciarSesion() {
    return (
        <View>
            <Text>Nombre de usuario</Text>
            <TextInput />
            <Text>Contraseña</Text>
            <TextInput />
        </View>
    )
}
export default IniciarSesion