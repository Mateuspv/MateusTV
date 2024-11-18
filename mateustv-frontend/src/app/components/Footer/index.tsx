import { Container, Typography } from "@mui/material"

function Footer() {
    return (
        <footer>
            <Container >
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    <img src="/assets/fix/MateusTV.png"
                        alt="MateusTV"
                    />
                </Typography>
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Nossa Política
                </Typography >
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Diretrizes da Comunidade | Política DMCA | Política de Privacidade | Termos de Serviço | Ajuda & Suporte
                </Typography>
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Recursos
                </Typography>
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Suporte | Parceiros  | Carreiras | Marca | Produtos | Comunidade
                </Typography>
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Idioma
                </Typography>
                <Typography variant="overline"
                    textAlign="center"
                    component="p">
                    Portugues
                </Typography>

            </Container>
        </footer>
    )
}

export default Footer