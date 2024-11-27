import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function HomeBar() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText 
          primary="Cadastros Para live" />
        <ListItemButton
          href="/categories"
        >
          <ListItemText primary="Categororias da Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/subCategory"
        >
          <ListItemText primary="SupCategororias da Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/genres"
        >
          <ListItemText primary="Generos da Live" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/lives"
        >
          <ListItemText primary="Lives" />
        </ListItemButton>
      </List>
    </aside>
  )
}

export default HomeBar;