import Login from "./components/Login"
import Profile from "./components/Profile"
import UsercontextProvider from "./context/UsercontextProvider"
import './App.css'

function App() {
  

  return (
    <UsercontextProvider>
      <h1>Hello this is React context Project</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
