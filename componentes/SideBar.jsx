import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import MenuIcon from './MenuIcon';
import { Link } from 'react-router-native';
import IconBookMedical from "react-native-vector-icons/FontAwesome5"
import IconGear from "react-native-vector-icons/FontAwesome"
import IconHelp from "react-native-vector-icons/Ionicons"
const animationDuration = 400; // Duración de la animación en milisegundos

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const animatedValue = useState(new Animated.Value(0))[0];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        Animated.timing(animatedValue, {
            toValue: isOpen ? 0 : 1,
            duration: animationDuration,
            useNativeDriver: false,
        }).start();
    };

    const sidebarAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 300], // Ancho del sidebar cuando está desplegado
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleSidebar}>
                <MenuIcon />
            </TouchableOpacity>
            <Animated.View style={[styles.sidebar, sidebarAnimation, { zIndex: isOpen ? 999 : -1 }]}>
                <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarButton} >
                    <MenuIcon />
                </TouchableOpacity>
                <View style={styles.sidebarContent}>
                    <View style={styles.textContainer}>
                        <IconBookMedical name="book-medical" size={20} />
                        <Link to="/miscitas" onPress={toggleSidebar}><Text style={styles.text}>Mis citas</Text></Link>
                    </View>
                    <View style={styles.textContainer}>
                        <IconGear name="gear" size={20} />
                        <Text style={styles.text} onPress={toggleSidebar}>Opciones</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <IconHelp name="help" size={20} />
                        <Text style={styles.text} onPress={toggleSidebar}>Centro de ayuda</Text>
                    </View>
                </View>
                <View style={{alignSelf:"center", bottom:0, paddingBottom:10, position:"absolute"}}><Text>Created by App2u</Text></View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        paddingLeft: 10,
    },
    toggleButton: {
        fontSize: 18,
        marginBottom: 10,
    },
    sidebar: {
        position: "absolute",
        top: 0,
        left: -300, // Empieza oculto
        width: 290, // Ancho inicial del sidebar (oculto)
        backgroundColor: '#ffff',
        height: 900,
        borderRightWidth: 1,
    },
    sidebarButton: {
        alignItems: 'flex-end',
        paddingRight: 8,
        paddingBottom: 29,
        borderBottomWidth: 2,
    },
    sidebarContent: {
        paddingLeft: 35,
        paddingTop: 20,
        justifyContent: "space-around"
    },
    text: {
        fontSize: 20,

    },
    textContainer: {
        flexDirection: "row",
        borderBottomWidth: 2,
        paddingBottom: 8,
        marginBottom: 18,
        borderColor: '#ccc',
        width: "90%",
        gap: 8,
        alignItems: "center"
    }
});

export default Sidebar;





