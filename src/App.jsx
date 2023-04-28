import "./app.css"

import { useState } from "react"

import NewReminder from "./components/NewReminder"
import ReminderList from "./components/ReminderList"
import Title from "./components/title"



export default function App() {

  const [reminders, setReminders] = useState(JSON.parse(localStorage.getItem("reminders")))



  return (
    <div className="app">
      <Title />

      <NewReminder
        reminders={reminders}
        setReminders={setReminders}
      />
      <ReminderList
        reminders={reminders}
        setReminders={setReminders}
      />


    </div>
  )
}
