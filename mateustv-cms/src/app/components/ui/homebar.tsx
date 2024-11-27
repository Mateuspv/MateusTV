import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function HomeBar() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText 
          primary="Cadastros de live" />
        <ListItemButton
          href="/lives"
        >
          <ListItemText primary="Categorias de Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/category"
        >
          <ListItemText primary="SupCategororias da Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/subCategory"
        >
          <ListItemText primary="Genero da Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/genres"
        >
        </ListItemButton>
      </List>
    </aside>
  )
}

export default HomeBar;