import { useEffect, useState } from "react";
import SubCategoryForm from "./form";
import { ISubCategory } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { SubCategoryService } from "../../../services/subcategory-service";
import { toast } from "react-toastify";

function SubCategoryEditPage() {
  const params = useParams();

  const [subCategory, setSubCategory] = useState<ISubCategory>({
    name: ''
  } as ISubCategory);

  useEffect(() => {

    if (params?.id) {
      SubCategoryService.getById(parseInt(params.id))
        .then(result => {
          setSubCategory(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <SubCategoryForm 
      subCategory={subCategory}
      setSubCategory={setSubCategory}
      showForm={true}
    />
  )
}

export default SubCategoryEditPage;