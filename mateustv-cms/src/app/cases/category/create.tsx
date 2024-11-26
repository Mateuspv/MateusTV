import { useState } from "react";
import { ICategory } from "../../../@libs/types";
import CategoryForm from "./form";

function CategoryCreatePage() {

  const [category, setCategory] = useState<ICategory>({
    name: ''
  } as ICategory);

  return (
    <CategoryForm 
      category={category}
      setCategory={setCategory}
      showForm={true}
    />
  )
}

export default CategoryCreatePage;