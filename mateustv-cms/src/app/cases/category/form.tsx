import { TextField } from "@mui/material";
import { ICategory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { CategoryService } from "../../../services/category-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type CategoryFormProps = {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  showForm: boolean;
}
function CategoryForm({
  category,
  setCategory,
  showForm
}: CategoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (category.id) ? 
        CategoryService.update(category.id, category) :  
            CategoryService.create(category);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/categories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  }
  const handleDelete = () => {
    setLoading(true);

    if (category.id) {
      CategoryService.remove(category.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/categories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Categoria"
      loading={loading}
      onSave={handleSave}
      {...(category.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome da Categoria"
        variant="outlined"
        size="small"
        value={category.name}
        onChange={event => setCategory({...category, name: event.target.value})}
      />
    </SideForm>
  )
}

export default CategoryForm;