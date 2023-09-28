import React from "react"
import { View, Text } from "react-native"
import AppBar from "./AppBar.jsx"
import MainScreenContainer from "../vistas/MainScreenContainer.jsx"
import { Route, Routes } from "react-router-native"
import PedirCita from "../vistas/PedirCita.jsx"
import CitaTelefonica from "../vistas/Cita.jsx"
import DetalleCitaTelefonica from "../vistas/DetalleCitaTelefonica.jsx"
import ConfirmacionCita from "../vistas/ConfirmacionCita.jsx"
import { CitaContextProvider } from "../context/CitaContext.jsx"
import MisCitas from "../vistas/MisCitas.jsx"
import { UsuarioContextProvider } from "../context/UsuarioContext.jsx"
import CambiarUsuario from "../vistas/CambiarUsuario.jsx"
import EditarUsuario from "../vistas/EditarUsuario.jsx"
import NuevoUsuario from "../vistas/NuevoUsuario.jsx"
import IniciarSesion from "../vistas/IniciarSesion.jsx"
import SeleccionarUsuario from "../vistas/SeleccionarUsuario.jsx"


const Main = () => {
    return (
        <View>
            <AppBar />
            <CitaContextProvider>
                <UsuarioContextProvider>
                    <Routes>
                        <Route path='/' element={<SeleccionarUsuario />} />
                        <Route path='/main' element={<MainScreenContainer />} />
                        <Route path='/pedircita' element={<PedirCita />} />
                        <Route path='/cita' element={<CitaTelefonica />} />
                        <Route path='/detallecitatelefonica' element={<DetalleCitaTelefonica />} />
                        <Route path='/confirmacioncita' element={<ConfirmacionCita />} />
                        <Route path='/miscitas' element={<MisCitas />} />
                        <Route path='/cambiarusuario' element={<CambiarUsuario />} />
                        <Route path='/editarusuario' element={<EditarUsuario />} />
                        <Route path='/añadirusuario' element={<NuevoUsuario />} />
                        <Route path="/inciarsesion" element={<IniciarSesion />} />
                    </Routes>
                </UsuarioContextProvider>
            </CitaContextProvider>
        </View>
    )
}
export default Main