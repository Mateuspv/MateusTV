import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LiveTvIcon from '@mui/icons-material/LiveTv';
function HomeBar() {
  return (
    <aside
      style={{
        width: '250px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <List component="nav">
        <ListItemButton style={{ color: '#fff' }}>
          <HomeIcon style={{ marginRight: '1rem' }} />
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton style={{ color: '#fff' }}>
          <CategoryIcon style={{ marginRight: '1rem' }} />
          <ListItemText primary="Procurar" />
        </ListItemButton>
        <ListItemButton  style={{ color: '#fff' }}>
          <FavoriteIcon style={{ marginRight: '1rem' }} />
          <ListItemText primary="Seguindo" />
        </ListItemButton>
        <Divider style={{ backgroundColor: '#444' }} />
        <ListItemButton style={{ color: '#fff' }}>
          <FavoriteBorderIcon style={{ marginRight: '1rem' }} />
          <ListItemText primary="Seguindo" />
        </ListItemButton>
        <Divider style={{ backgroundColor: '#444' }} />
        <ListItemButton style={{ color: '#fff' }}>
          <LiveTvIcon style={{ marginRight: '1rem' }} />
          <ListItemText primary="Canais Recomendados" />
        </ListItemButton>
      </List>
    </aside>
  );
};

export default HomeBar;