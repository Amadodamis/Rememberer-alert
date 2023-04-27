import "./newReminder.css"
import { formatDate, maxDate } from "../JS/formatDate"


export default function NewReminder() {

    let date = new Date()
    console.log(formatDate(date))
    console.log("2017-06-01T08:30")
    return (
        <section className="box-newReminder">

            <input
                className="input-text"
                name="recordatorio"
                type="text"
                placeholder="Reminder"

            />

            <div className='container-date-button'>

                <input type="datetime-local"
                    name="newDate"
                    defaultValue={formatDate(date)}
                    min={formatDate(date)}
                    max={maxDate(date)}

                />

                <button> ADD </button>
            </div>


        </section>
    )
}
