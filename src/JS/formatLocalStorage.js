function firstReminder(reminder, reminders, setReminders) {
    let arrayReminders = [reminder]
    reminder.id = Date.now();



    setReminders(arrayReminders)

    localStorage.setItem("reminders", JSON.stringify(arrayReminders))

}

function addReminder(reminder, reminders, setReminders) {
    reminder.id = Date.now();
    let arrayReminders = JSON.parse(localStorage.getItem("reminders"))
    arrayReminders.push(reminder)

    setReminders(arrayReminders)

    localStorage.setItem("reminders", JSON.stringify(arrayReminders))

}
function deleteReminder(reminderIdToDelete, reminders, setReminders) {

    let arrayReminders = JSON.parse(localStorage.getItem("reminders"))

    const newListReminders = arrayReminders.filter((reminder) => reminderIdToDelete !== reminder.id);



    if (newListReminders.length) {
        localStorage.setItem("reminders", JSON.stringify(newListReminders))
        //lo quito de la lista
        setReminders(newListReminders)

    } else {
        localStorage.clear()
        setReminders(null)

    }


}

export { firstReminder, addReminder, deleteReminder }