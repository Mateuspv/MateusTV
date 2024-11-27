import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './app/components/ui/header'
import HomeBar from './app/components/ui/homebar'
import CategoryLayout from './app/cases/category/layout'
import CategoryCreatePage from './app/cases/category/create'
import CategoryEditPage from './app/cases/category/edit'
import SubCategoryLayout from './app/cases/subCategory/layout'
import SubCategoryCreatePage from './app/cases/subCategory/create'
import SubCategoryEditPage from './app/cases/subCategory/edit'
import GenreLayout from './app/cases/genres/layout'
import GenreCreatePage from './app/cases/genres/create'
import GenreEditPage from './app/cases/genres/edit'
import LiveLayout from './app/cases/live/layout'
import LiveCreatePage from './app/cases/live/create'
import LiveEditPage from './app/cases/live/edit'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <HomeBar />
        <Routes>
          <Route path="/categories" element={ <CategoryLayout /> }>
            <Route path="new" element={ <CategoryCreatePage /> } />
            <Route path=":id" element={ <CategoryEditPage /> } />
          </Route>
          <Route path="/subCategory" element={ <SubCategoryLayout /> }>
            <Route path="new" element={ <SubCategoryCreatePage /> } />
            <Route path=":id" element={ <SubCategoryEditPage /> } />
          </Route>
          <Route path="/genres" element={ <GenreLayout /> }>
            <Route path="new" element={ <GenreCreatePage /> } />
            <Route path=":id" element={ <GenreEditPage /> } />
          </Route>
          <Route path="/live" element={ <LiveLayout /> }>
            <Route path="new" element={ <LiveCreatePage /> } />
            <Route path=":id" element={ <LiveEditPage /> } />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
