import "./app.css"
import NewReminder from "./components/NewReminder"
import ReminderList from "./components/ReminderList"
import Title from "./components/title"

export default function App() {
  return (
    <div className="app">
      <Title />
      <NewReminder />
      <ReminderList />
    </div>
  )
}

