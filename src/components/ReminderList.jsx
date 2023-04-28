import "./reminderList.css"

import { deleteReminder } from "../JS/formatLocalStorage"
import editIcon from "../img/edit.png"
import deleteIcon from "../img/delete.png"


export default function ReminderList({reminders, setReminders}) {


    const startDrag = (evt, reminder) => {
        evt.dataTransfer.setData('reminderID', reminder.id)

    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }


    const onDrop = (evt) => {
        const reminderIdToDelete = parseInt(evt.dataTransfer.getData('reminderID'));

        //lo quito del local storage
        deleteReminder(reminderIdToDelete,reminders, setReminders)

        

    }


    return (
        <section className="box-ReminderList">
            <h2 className="title-list-reminders">
                List of reminders
            </h2>
            <div className='container-items'>

                {reminders!==null || reminders === [] ?
                    reminders.map((reminder, i) =>

                        <div className="item" key={i} draggable onDragStart={(evt) => startDrag(evt, reminder)}>
                            <p className="text-list message">{reminder.message}</p>
                            <p className="text-list">{reminder.day}-{reminder.month}-{reminder.year} {reminder.hour}:{reminder.minute}hs</p>
                            <img src={editIcon} alt='IconEdit.png' className='icon-edit' />
                        </div>

                    )
                    :
                    <p className="text-list no-reminder" >No hay recordatorios.</p>
                }
            </div>

            <img src={deleteIcon} alt='delete-icon' className='delete-icon' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt))} />

        </section>
    )
}


