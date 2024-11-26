import { TextField } from "@mui/material";
import { IGenre } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { GenreService } from "../../../services/genres-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type GenreFormProps = {
  genre: IGenre;
  setGenre: (genre: IGenre) => void;
  showForm: boolean;
}
function GenreForm({
  genre,
  setGenre,
  showForm
}: GenreFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (genre.id) ? 
        GenreService.update(genre.id, genre) :  
            GenreService.create(genre);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/genres');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  }
  const handleDelete = () => {
    setLoading(true);

    if (genre.id) {
      GenreService.remove(genre.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/genres');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Genero"
      loading={loading}
      onSave={handleSave}
      {...(genre.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome di Genero"
        variant="outlined"
        size="small"
        value={genre.name}
        onChange={event => setGenre({...genre, name: event.target.value})}
      />
    </SideForm>
  )
}

export default GenreForm;