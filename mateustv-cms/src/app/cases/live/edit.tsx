import { useEffect, useState } from "react";
import LiveForm from "./form";
import { ILive } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { LiveService } from "../../../services/live-service";
import { toast } from "react-toastify";

function LiveEditPage() {
  const params = useParams();

  const [live, setLive] = useState<ILive>({
    name: ''
  } as ILive);

  useEffect(() => {

    if (params?.id) {
      LiveService.getById(params.id)
        .then(result => {
          setLive(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <LiveForm 
      live={live}
      setLive={setLive}
      showForm={true}
    />
  )
}

export default LiveEditPage;