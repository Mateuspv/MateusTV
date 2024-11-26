import { useState } from "react";
import { IGenre } from "../../../@libs/types";
import GenreForm from "./form";

function GenreCreatePage() {

  const [genre, setGenre] = useState<IGenre>({
    name: ''
  } as IGenre);
    
  return (
    <GenreForm 
      genre={genre}
      setGenre={setGenre}
      showForm={true}
    />
  )
}

export default GenreCreatePage;