import "./reminderList.css"
import editIcon from "../img/edit.png"
import deleteIcon from "../img/delete.png"

export default function ReminderList() {

    let message = "Comprar plasticola para el proyecto de ciencias."
    let year = "2017"
    let month = "12"
    let day = "2"
    let hour = "11"
    let minute = "21"


    let item = <div className="item"><p className="text-list">{message}</p><p className="text-list">{year}-{month}-{day} {hour}:{minute}hs</p><div className="container-icons"><img src={editIcon} alt='IconEdit.png' className='icon-delete-edit' /> <img src={deleteIcon} alt='IconDelete.png' className='icon-delete-edit' /></div></div>


    return (
        <section className="box-ReminderList">
            <h2 className="title-list-reminders">
                List of reminders
            </h2>

            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}

        </section>
    )
}


