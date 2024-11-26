import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IGenre } from "../../../@libs/types";
import { GenreService } from "../../../services/genres-service";
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
    headerName: 'Tipo do Genero',
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

function GenreDataGrid() {
  const location = useLocation();

  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(()=> {
      GenreService.getAll()
        .then(result => {
          setGenres(result.data)
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
        rows={genres}
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

export default GenreDataGrid;