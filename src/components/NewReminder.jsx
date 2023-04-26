import "./newReminder.css"
import formatDate from "../JS/formatDate"


export default function NewReminder() {

    let date = new Date()
    let actualDate = formatDate(date)

    return (
        <section className="box-newReminder">
            <form>
            
                <input type="datetime-local"
                    name="meeting-time"
                    defaultValue={actualDate}
                    min="2018-06-07T00:00"
                    max="2018-06-14T00:00"

                />

                <button type="submit">Add</button>
            </form>

        </section>
    )
}
