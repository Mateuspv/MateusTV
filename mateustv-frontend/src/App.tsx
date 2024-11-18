//import { Route, Routes } from "react-router-dom"
//import Homepage from "./app/pages/home"
import Header from "./app/components/Header"
import Footer from "./app/components/Footer"

function App() {

  return (
    <div className="wrapper">
      <Header />
      {/* <Routes>
        <Route path="/:id?" element={<Homepage />} />
      </Routes> */}
      <Footer />
    </div>
  )
}

export default App