import "./newReminder.css"
import { formatDate, maxDate } from "../JS/formatDate"


export default function NewReminder() {

    let date = new Date()
    //console.log(formatDate(date))
    //console.log("2017-06-01T08:30")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.recordatorio.value)
        console.log(e.target.newDate.value)


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
