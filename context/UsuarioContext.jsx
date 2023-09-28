import { createContext, useContext, useEffect, useState } from "react";
import { useCitaContext } from "./CitaContext";

export const UsuarioContext = createContext({});

export const UsuarioContextProvider = ({ children }) => {
    const { citas } = useCitaContext();
    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nombre: "Antonia",
            apellido: "Salas Ramos",
            fechaNacimiento: "17/02/1976",
            nTarjetaSanitaria: "297067853876",
            fotoPerfil: "",
            perfilSeleccionado: false,
            citas: citas,
            correo: "antoniaramos@gmail.com"
        },
        {
            id: 2,
            nombre: "Lionel",
            apellido: "Messi",
            fechaNacimiento: "24/06/1987",
            nTarjetaSanitaria: "298467859076",
            fotoPerfil: "",
            perfilSeleccionado: false,
            citas: citas,
            correo: "lionelmessi@gmail.com"
        }
    ])

    const nuevoUsuario = (info) => {
        const nuevoUser =
        {
            id: usuarios.length + 1,
            nombre: info.nombre,
            apellido: info.apellido,
            fechaNacimiento: info?.fechaNacimiento,
            nTarjetaSanitaria: info.nTarjetaSanitaria,
            fotoPerfil: info?.fotoPerfil,
            perfilSeleccionado: false,
            citas: citas,
            correo: info.correo
        };
        setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUser]);
    };

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState() //contenedor del usuario seleccioado

    useEffect(() => {
        usuarios.forEach((usuario) => {
            usuario.perfilSeleccionado === true && setUsuarioSeleccionado(usuario)
        })
        //Selecciona a traves de la propiedad perfilSeleccionado cual es el perfil que se va a mostrar en la pantalla principal
    }, [usuarios])




    return (
        <UsuarioContext.Provider value={{ usuarios, usuarioSeleccionado, nuevoUsuario, setUsuarios, setUsuarioSeleccionado }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export const useUsuarioContext = () => useContext(UsuarioContext);