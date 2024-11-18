import { Box, Paper, Stack, Typography } from "@mui/material";
import { ILive } from "../../@libs/types";

type LiveCardProps = {
  live: ILive
}
function LiveCard({
  live
}: LiveCardProps) {
  return (
    <Box>
        <Stack direction="column">
        <Paper
      component="a"
      elevation={0}
      href={live.id}
      sx={{
        minWidth: '10rem'
      }}
    >
      <img src={`assets/${live.liveCard}`}
        style={{
          width: '100%'
        }}
      />
        </Paper>
        <Stack direction="row">
        <img src={`assets/${live.streamCard}`} style={{ borderRadius: '50%', width: '12%' }} />
        <Stack direction="column">
        <Typography sx={{fontSize: '0.75rem'}}>
        {live.tittle && live.tittle.length > 55
        ? `${live.tittle.substring(0, 55)}...` 
        : live.tittle}
        </Typography >
        <Typography sx={{fontSize: '0.75rem'}}>
        {live.categories && live.categories.map(categories => (categories.name)).join(', ')}
        </Typography>
        <Typography sx={{fontSize: '0.75rem'}}>
        {live.subCategory && live.subCategory.map(subCategory => (subCategory.name)).join(', ')}    
        </Typography>
        </Stack>
        </Stack>
    </Stack>
    </Box>
  )
}

export default LiveCard;