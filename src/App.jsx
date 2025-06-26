import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage></HomePage>} path="" exact></Route>
        <Route element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </>
  )
}

export default App
