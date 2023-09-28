import { createContext, useContext, useEffect, useState } from "react";

export const CitaContext = createContext({});

export const CitaContextProvider = ({ children }) => {
    const [horario, setHorario] = useState()
    const [numeroConsulta, setNumeroConsulta] = useState(1)
    const [date, setDate] = useState()
    const [tipoCita, setTipoCita] = useState();
    const [citas, setCitas] = useState([])


    const handleHorario = (horario) => {
        setHorario(horario ? horario : "")
    }
    const handleNumeroConsulta = () => {
        setNumeroConsulta(numeroConsulta + 1)
    }
    const handleDate = (date) => {
        setDate(date ? date : "")
    }

    const misCitas = () => {
        const nuevaCita = { horario: horario, fecha: date, tipoCita: tipoCita };
        setCitas((prevCitas) => [...prevCitas, nuevaCita]);
    };

    const handleTipoCita = (tipo) => {
        setTipoCita(tipo)
    }

    return (
        <CitaContext.Provider value={{ handleHorario, horario, handleNumeroConsulta, numeroConsulta, date, handleDate, misCitas, citas, handleTipoCita, tipoCita }}>
            {children}
        </CitaContext.Provider>
    )
}

export const useCitaContext = () => useContext(CitaContext);