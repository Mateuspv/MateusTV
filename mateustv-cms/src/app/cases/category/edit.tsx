import { useEffect, useState } from "react";
import CategoryForm from "./form";
import { ICategory } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { CategoryService } from "../../../services/category-service";
import { toast } from "react-toastify";

function CategoryEditPage() {
  const params = useParams();

  const [category, setCategory] = useState<ICategory>({
    name: ''
  } as ICategory);

  useEffect(() => {

    if (params?.id) {
      CategoryService.getById(parseInt(params.id))
        .then(result => {
          setCategory(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <CategoryForm 
      category={category}
      setCategory={setCategory}
      showForm={true}
    />
  )
}

export default CategoryEditPage;