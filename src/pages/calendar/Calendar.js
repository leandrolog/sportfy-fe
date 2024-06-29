import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configurar o localizador de datas usando moment
const localizer = momentLocalizer(moment);

// Dados mockados para o calendário
const myEventsList = [
    {
        title: "Beach tenis",
        start: new Date(2024, 5, 22, 10, 0), // 29 de junho de 2024, 10:00
        end: new Date(2024, 5, 22, 12, 0),   // 29 de junho de 2024, 12:00
    },
    {
        title: "Beachzinho na brava",
        start: new Date(2024, 5, 9, 9, 0), // 30 de junho de 2024, 13:00
        end: new Date(2024, 5, 9, 11, 0),   // 30 de junho de 2024, 14:00
    },
    {
        title: "jogo na arena canas",
        start: new Date(2024, 6, 6, 7, 0),  // 1 de julho de 2024, 07:00
        end: new Date(2024, 6, 6, 8, 30),   // 1 de julho de 2024, 08:30
    },
];

function CalendarPage() {
    return (
        <div style={{ padding: '20px' }}>
            <div className="page-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Calendário</p>
            </div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
}

export default CalendarPage;
