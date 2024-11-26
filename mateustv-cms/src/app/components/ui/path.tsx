import { Breadcrumbs, Typography } from "@mui/material";

type PathProps = {
  title: string
}
function Path({
  title
}: PathProps) {
  return (
    <Breadcrumbs
      separator=">"
      sx={{
        marginBottom: '2rem'
      }}
    >
      <Typography>Home</Typography>
      <Typography>{title}</Typography>
    </Breadcrumbs>
  )
}

export default Path;