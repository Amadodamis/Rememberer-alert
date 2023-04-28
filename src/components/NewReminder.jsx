import "./newReminder.css"
import { formatDate, maxDate, formatDateToObject } from "../JS/formatDate"
import { firstReminder, addReminder } from "../JS/formatLocalStorage"

export default function NewReminder({ reminders, setReminders }) {

    let date = new Date()
    //console.log(formatDate(date))
    //console.log("2017-06-01T08:30")

    const handleSubmit = (e) => {
        e.preventDefault();
        let message = e.target.recordatorio.value;

        //transformo el value en una fecha
        let newDate = new Date(e.target.newDate.value)

        //extraigo los datos y lo convierto en un objeto
        let newReminder = formatDateToObject(newDate, message)

        //Si el local storage ya contiene informacion.
        if (localStorage.getItem("reminders")) {
            addReminder(newReminder, reminders, setReminders)
        }

        //inicializador de localStorage
        else {
            firstReminder(newReminder, reminders, setReminders)
        }


        //Cuando se envia el formulario, date cambia y se actualiza en el calendario y se limpia el reminder
        e.target.recordatorio.value = ""
        date = new Date()
        e.target.newDate.value = (formatDate(date))

    }




    return (
        <section className="box-newReminder">
            <form onSubmit={handleSubmit} className="form" >

                <input
                    className="input-text"
                    name="recordatorio"
                    type="text"
                    placeholder="Insert a reminder..."

                />

                <input
                    className="input-date"
                    type="datetime-local"
                    name="newDate"
                    defaultValue={formatDate(date)}
                    min={formatDate(date)}
                    max={maxDate(date)}

                />

                <button type="submit" className="button-add"> ADD </button>

            </form>

        </section>
    )
}
