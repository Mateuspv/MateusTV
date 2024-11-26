import { TextField } from "@mui/material";
import { ILive } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { LiveService } from "../../../services/live-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Live"
      loading={loading}
      onSave={handleSave}
      {...(live.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome da Live"
        variant="outlined"
        size="small"
        value={live.name}
        onChange={event => setLive({...live, name: event.target.value})}
      />
    </SideForm>
  )
}

export default LiveForm;