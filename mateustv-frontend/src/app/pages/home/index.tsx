import { useEffect, useState } from "react";
import { IGenre } from "../../@libs/types";
import { GenreService } from "../../services/genres-service";
import HighlightSection from "../../components/HighlightSection";
import Section from "../../components/Section";
import HomeBar from "../../components/HomeBar";
import './global.css'


function Homepage() {

  const [genres, setCategories] = useState<IGenre[]>([]);

  useEffect(() => {
    GenreService.getAll()
      .then(result => {
        setCategories(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <div className="main-content">
      <div className="content">
        <HomeBar />
        <div className="highlight-container">
          <HighlightSection />
          <div
            style={{
              marginTop: '1rem',
            }} />

          {
            genres.map(item => (
              <Section key={item.id} genres={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Homepage;