import { useState } from "react";
import { ISubCategory } from "../../../@libs/types";
import SubCategoryForm from "./form";

function SubCategoryCreatePage() {

  const [subCategory, setSubCategory] = useState<ISubCategory>({
    name: ''
  } as ISubCategory);

  return (
    <SubCategoryForm 
      subCategory={subCategory}
      setSubCategory={setSubCategory}
      showForm={true}
    />
  )
}

export default SubCategoryCreatePage;