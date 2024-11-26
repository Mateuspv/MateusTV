import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ICategory } from "../../../@libs/types";
import { CategoryService } from "../../../services/category-service";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código',
    resizable: false,
    width: 350
  },
  {
    field: 'name',
    headerName: 'Tipo da Categoria',
    resizable: false,
    flex: 1
  },
  {
    field: 'action',
    headerName: '',
    resizable: false,
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionMenu 
        itemId={ params.row.id }
      />
    )
  }
];

function CategoryDataGrid() {
  const location = useLocation();

  const [categorys, setCategorys] = useState<ICategory[]>([]);

  useEffect(()=> {
      CategoryService.getAll()
        .then(result => {
          setCategorys(result.data)
        })
        .catch(error => toast.error(String(error)))
  }, [location])

  return (
    <Paper
      sx={{
        height: '90%',
        width: '100%'
      }}
    >

      <DataGrid
        rows={categorys}
        columns={columns}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          }
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />

    </Paper>
  )
}

export default CategoryDataGrid;