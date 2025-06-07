import { Header } from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  )
}