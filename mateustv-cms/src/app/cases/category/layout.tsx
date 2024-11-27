import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Path from "../../components/ui/path";
import { Outlet, useNavigate } from "react-router-dom";
import CategoryDataGrid from "./datagrid";

function CategoryLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/categories/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <Path title="Cadastro de Categoria" />
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

      <CategoryDataGrid />

      <Outlet />
    </Stack>
  )
}

export default CategoryLayout;