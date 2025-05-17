import { Menus } from 'utils/constants'
import '../styles/global.css'
import Sidebar from './sidebar/Sidebar'
import useMainApp from 'hooks/useMainApp'
import NavBar from './navbar/NavBar'
import { Route, Routes } from 'react-router'
import Dashboard from 'pages/dashboard/Dashboard'
import Reports from 'pages/reports/Reports'
import User from 'pages/users/User'
const App = () => {
  const [{ open, mode }, { handelOpen }] = useMainApp()
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Sidebar open={open} handelOpen={handelOpen} menuList={Menus} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
