import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { ICategory, IGenre, ILive, ISubCategory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useEffect, useState } from "react";
import { LiveService } from "../../../services/live-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CategoryService } from "../../../services/category-service";
import { SubCategoryService } from "../../../services/subcategory-service";
import { GenreService } from "../../../services/genres-service";
type LiveFormProps = {
  live: ILive;
  setLive: (live: ILive) => void;
  showForm: boolean;
}
function LiveForm({
  live,
  setLive,
  showForm
}: LiveFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [Category, setCategory] = useState<ICategory[]>([]);
  const [SubCategory, setSubCategory] = useState<ISubCategory[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);   
  
  useEffect(()=>{
    CategoryService.getAll()
      .then(result => {
        setCategory(result.data)
      });

    SubCategoryService.getAll()
      .then(result => {
        setSubCategory(result.data)
      })
      
    GenreService.getAll()
      .then(result => {
        setGenres(result.data)
      }) 
  },[]);
  
  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (live.id) ? 
        LiveService.update(live.id, live) :  
        LiveService.create(live);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/lives');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  }
  const handleDelete = () => {
    setLoading(true);

    if (live.id) {
      LiveService.remove(live.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/lives');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  const handleChangeCategory = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = Category.find(item => item.id === Number(value))
    
    setCategory({...live, Category: seleted!})
  }

  const handleChangeSubCategory = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = SubCategory.find(item => item.id === Number(value))
    
    setSubCategory({...live, subCategory: seleted!})
  }

  const handleChangeGenre = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = genres.find(item => item.id === Number(value))
    
    setGenres({...live, genres: seleted!})
  }

  return (
    <SideForm
      open={showForm}
      title="Cadastro de Live"
      loading={loading}
      onSave={handleSave}
      {...(live.id && {onDelete: handleDelete})}
    >
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-type">Categoria da Live</InputLabel>
        <Select
          labelId="select-type"
          label="Categoria da Live"
          value={String(live.categories.id || '')}
          onChange={handleChangeCategory}
        >
          {Category.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-model">SubCateogria da Live</InputLabel>
        <Select
          labelId="select-model"
          label="SubCateogria da live"
          value={String(live.subCategory.id || '')}
          onChange={handleChangeSubCategory}
        >
          {SubCategory.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-model">Generos da Live</InputLabel>
        <Select
          labelId="select-model"
          label="Generos da live"
          value={String(live.genres.id || '')}
          onChange={handleChangeGenre}
        >
          {genres.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Stack
        direction="row"
        gap={1}
      >
        <TextField 
          required
          label="Nome do Streamer"
          variant="outlined"
          size="small"
          value={live.streamName}
          onChange={event => setLive({...live, streamName: event.target.value})} 
        />
        <TextField
          required
          label="Foto do Streamer"
          variant="outlined"
          size="small"
          value={live.streamCard}
          onChange={event => setLive({...live, streamCard: event.target.value})}
        />
        <TextField 
          fullWidth
          required
          label="Titulo"
          variant="outlined"
          size="small"
          value={live.tittle}
          onChange={event => setLive({...live, tittle: event.target.value})}
        />
      </Stack>
      <TextField       
        fullWidth
        required
        multiline
        rows={4}
        label="Foto da Live"
        variant="outlined"
        size="small"
        value={live.liveCard}
        onChange={event => setLive({...live, liveCard: event.target.value})}
      />
    </SideForm>
  )
}

export default LiveForm;