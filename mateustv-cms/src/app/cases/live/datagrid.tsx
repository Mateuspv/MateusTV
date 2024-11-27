import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ILive } from "../../../@libs/types";
import { LiveService } from "../../../services/live-service";
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
    field: 'streamName',
    headerName: 'Nome do Streamer',
    resizable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.streamName}</>
    )
  },
  {
    field: 'streamCard',
    headerName: 'Foto do streamer',
    resizable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.streamCard}</>
    )
  },
  {
    field: 'tittle',
    headerName: 'Titulo',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.tittle}</>
    )
  },
  {
    field: 'liveCard',
    headerName: 'Foto da live',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.liveCard}</>
    )
  },
  {
    field: 'category',
    headerName: 'Categoria da live',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.categories.name}</>
    )
  },
  {
    field: 'subCategory',
    headerName: 'SubCategoria da live',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.subCategory.name}</>
    )
  },
  {
    field: 'genres',
    headerName: 'Genero na live',
    resizable: false,
    width: 120,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.row.genres.name}</>
    )
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

function LiveDataGrid() {
  const location = useLocation();

  const [lives, setLives] = useState<ILive[]>([]);

  useEffect(()=> {
      LiveService.getAll()
        .then(result => {
          setLives(result.data)
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
        rows={lives}
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

export default LiveDataGrid;