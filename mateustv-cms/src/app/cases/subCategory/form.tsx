import { TextField } from "@mui/material";
import { ISubCategory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { SubCategoryService } from "../../../services/subcategory-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type SubCategoryFormProps = {
  subCategory: ISubCategory;
  setSubCategory: (subCategory: ISubCategory) => void;
  showForm: boolean;
}
function SubCategoryForm({
  subCategory,
  setSubCategory,
  showForm
}: SubCategoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (subCategory.id) ? 
        SubCategoryService.update(subCategory.id, subCategory) :  
            SubCategoryService.create(subCategory);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/subCategory');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  }
  const handleDelete = () => {
    setLoading(true);

    if (subCategory.id) {
      SubCategoryService.remove(subCategory.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/subCategory');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de SubCategoria"
      loading={loading}
      onSave={handleSave}
      {...(subCategory.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome da SubCategoria"
        variant="outlined"
        size="small"
        value={subCategory.name}
        onChange={event => setSubCategory({...subCategory, name: event.target.value})}
      />
    </SideForm>
  )
}

export default SubCategoryForm;