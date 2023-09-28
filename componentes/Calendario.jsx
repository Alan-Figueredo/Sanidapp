import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useCitaContext } from "../context/CitaContext"


const styles = StyleSheet.create({
    calendar: {
        borderWidth: 1,
        borderColor: "#666666",
        backgroundColor: "#666666",
        textSectionTitleColor: '#ffffff',
    }
})


LocaleConfig.locales['es'] = {
    monthNames: [
        'ENERO',
        'FEBRERO',
        'MARZO',
        'ABRIL',
        'MAYO',
        'JUNIO',
        'JULIO',
        'AGOSTO',
        'SEPTIEMBRE',
        'OCTUBRE',
        'NOVIEMBRE',
        'DICIEMBRE'
    ],
    monthNamesShort: ['ENE.', 'FEB.', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL.', 'AGO', 'SEPT.', 'OCT.', 'NOV.', 'DIC.'],
    dayNames: ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'],
    dayNamesShort: ['DOM.', 'LUN.', 'MAR.', 'MIE.', 'JUE.', 'VIE.', 'SAB.'],
};
LocaleConfig.defaultLocale = 'es';
const Calendario = () => {
    const [selected, setSelected] = useState('');
    const { handleDate, date } = useCitaContext();
    return (
        <Calendar
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                minWidth: 100,
                width: "100%",
                marginVertical: 10
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'white',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'white',
                indicatorColor: 'blue',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 12,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 12,
                'stylesheet.calendar.header': {
                    header: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: "#666666",
                        margin: -7,
                    },
                },
                'stylesheet.day.basic': {

                    base: {
                        margin: 0,
                        paddingHorizontal: 8
                    }
                }
            }}

            onDayPress={day => {
                handleDate(day.dateString)
            }}
            markedDates={{
                [date]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
            }}
        />
    );
};

export default Calendario;