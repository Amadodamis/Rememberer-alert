import "./reminderList.css"
import editIcon from "../img/edit.png"
import deleteIcon from "../img/delete.png"
export default function ReminderList() {

    let reminderModel = {
        message: "Comprar plasticola para el proyecto de ciencias.",
        year: "2023",
        month: "05",
        day: "1",
        hour: "09",
        minute: "15",
    }

    let array = [reminderModel, reminderModel, reminderModel, reminderModel, reminderModel, reminderModel, reminderModel,]
    //let array =[]

    return (
        <section className="box-ReminderList">
            <h2 className="title-list-reminders">
                List of reminders
            </h2>
            <div className='container-items'>

                {array.length ?
                    array.map((reminder, i) =>

                        <div className="item" key={i}>
                            <p className="text-list message">{reminder.message}</p>
                            <p className="text-list">{reminder.day}-{reminder.month}-{reminder.year} {reminder.hour}:{reminder.minute}hs</p>
                            <img src={editIcon} alt='IconEdit.png' className='icon-edit' />
                        </div>

                    )
                    :
                    <p className="text-list no-reminder" >No hay recordatorios.,</p>
                }
            </div>

            <img src={deleteIcon} alt='delete-icon' className='delete-icon' />

        </section>
    )
}


