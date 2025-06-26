import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"


function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage></HomePage>} path="" exact></Route>
      </Routes>
    </>
  )
}

export default App
