import { useEffect, useState } from "react";
import GenreForm from "./form";
import { IGenre } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { GenreService } from "../../../services/genres-service";
import { toast } from "react-toastify";

function GenreEditPage() {
  const params = useParams();

  const [genre, setGenre] = useState<IGenre>({
    name: ''
  } as IGenre);

  useEffect(() => {

    if (params?.id) {
      GenreService.getById(parseInt(params.id))
        .then(result => {
          setGenre(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <GenreForm 
      genre={genre}
      setGenre={setGenre}
      showForm={true}
    />
  )
}

export default GenreEditPage;