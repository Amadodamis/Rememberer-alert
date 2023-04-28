import "./reminderList.css"
import editIcon from "../img/edit.png"

export default function ReminderList() {

    let reminderModel = {
        message: "Comprar plasticola para el proyecto de ciencias.",
        year: "2017",
        month: "12",
        day: "2",
        hour: "11",
        minute: "21",
    }

    let array = [reminderModel, reminderModel, reminderModel, reminderModel, reminderModel, reminderModel, reminderModel, reminderModel,]

    return (
        <section className="box-ReminderList">
            <h2 className="title-list-reminders">
                List of reminders
            </h2>

            {array.length ?
                array.map((reminder, i) =>

                    <div className="item" key={i}>
                        <p className="text-list message">{reminder.message}</p>
                        <p className="text-list">{reminder.year}-{reminder.month}-{reminder.day} {reminder.hour}:{reminder.minute}hs</p>
                        <img src={editIcon} alt='IconEdit.png' className='icon-edit' />
                    </div>

                )
                :
                <p className="text-list" >No hay recordatorios</p>
            }

        </section>
    )
}


