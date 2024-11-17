import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/:id?" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App