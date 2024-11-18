import { useEffect, useState } from "react";
import { IGenre } from "../../@libs/types";
import { GenreService } from "../../services/genres-service";
import HighlightSection from "../../components/HighlightSection";



function Homepage(){

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
      <main
        style={{
          marginTop: '5rem',
        }}
      >
        <HighlightSection />

      </main>
    )
}

export default Homepage;