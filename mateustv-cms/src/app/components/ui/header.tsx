import { AppBar, Box, Container, InputAdornment, TextField, Toolbar } from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Box display="flex">
                    <DensityMediumIcon />
                </Box>
                <Box>
                    <img src="/assets/fix/MateusTV.png"
                        alt="MateusTV"
                        style={{
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        }}
                    />
                </Box>

                <Container sx={{ display: 'flex', justifyContent: 'center', paddingRight: '3rem' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Pesquisar"
                        size="small"
                        sx={{
                            width: '35%',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'Gray',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#a0a0a0',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#9147ff',
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
            
                <Box sx={{justifyContent: 'left'}}>
                <img src="/assets/fix/UserIcon.png"
                        alt="UserIcon"
                        style={{
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            borderRadius: '50%'
                        }}
                    />
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header;