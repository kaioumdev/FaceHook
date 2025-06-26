import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"
import NotFount from "./pages/NotFount"
import PrivatRoutes from "./routes/PrivatRoutes"

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivatRoutes></PrivatRoutes>}>
          <Route element={<HomePage></HomePage>} path="/" exact></Route>
          <Route element={<ProfilePage></ProfilePage>} path="/me"></Route>
        </Route>
        <Route element={<LoginPage></LoginPage>} path="/login"></Route>
        <Route element={<RegistrationPage></RegistrationPage>} path="/registar"></Route>
        <Route element={<NotFount></NotFount>} path="*"></Route>
      </Routes>
    </>
  )
}

export default App
