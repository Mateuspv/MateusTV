import { useState } from "react";
import { ILive } from "../../../@libs/types";
import LiveForm from "./form";

function LiveCreatePage() {

  const [live, setLive] = useState<ILive>({
    name: ''
  } as ILive);
  
  return (
    <LiveForm 
      live={live}
      setLive={setLive}
      showForm={true}
    />
  )
}

export default LiveCreatePage;