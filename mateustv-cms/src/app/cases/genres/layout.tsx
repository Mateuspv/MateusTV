import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Path from "../../components/ui/path";
import { Outlet, useNavigate } from "react-router-dom";
import LiveDataGrid from "./datagrid";

function GenreLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/genres/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <Path title="Cadastro de Genero" />
      <Box
        display="flex"
        width="100%"
        justifyContent="end"
        marginBottom="1rem"
      >
        <Button
          variant="contained"
          onClick={handleCreate}
        >
          <AddIcon />
          Adicionar
        </Button>
      </Box>

      <LiveDataGrid />

      <Outlet />
    </Stack>
  )
}

export default GenreLayout;