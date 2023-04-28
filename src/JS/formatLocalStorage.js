function firstReminder(reminder) {

    reminder.id = Date.now();

    localStorage.setItem("reminders", JSON.stringify([reminder]))

}

function addReminder(reminder) {
    reminder.id = Date.now();
    let arrayReminders = JSON.parse(localStorage.getItem("reminders"))
    arrayReminders.push(reminder)
    localStorage.setItem("reminders", JSON.stringify(arrayReminders))

}
function deleteReminder() {



}

export { firstReminder, addReminder, deleteReminder }