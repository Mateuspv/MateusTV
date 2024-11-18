import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ILive } from "../../@libs/types";
import { LiveService } from "../../services/live-service";
import { Box,  Stack, Typography } from "@mui/material";

function HighlightSection() {

    const params = useParams();

    const [live, setMovie] = useState<ILive>({} as ILive);

    useEffect(() => {

        const liveId = (params.id) ? params.id : '64bf303e-4b7b-4a3c-b304-68759c98ed41'

        LiveService.getLiveById(liveId)
            .then(result => {
                if (result) setMovie(result);
            })
            .catch(error => {
                console.log('PAU: ', error)
            })

    }, [params]);

    return (

        <Box sx={{
            width: '50%',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Stack direction="column">
                <Stack direction="row">
                <img src={`assets/${live.streamCard}`} style={{ borderRadius: '50%', width: '6%' }} />
                <Typography variant="h5" sx={{ marginLeft: '0.5rem', justifyContent: 'center', alignItems: 'center', marginTop: '0.4rem'}}>
                    {live.streamName}
                </Typography>
                </Stack>
                <Stack direction="row">
                    <Typography variant="body2" sx={{ marginTop: '1rem' }}>
                        {live.tittle}
                    </Typography>
                </Stack>
                <Stack direction="row">
                <Typography variant="body2" sx={{ marginTop: '1rem' }}>
                    {live.categories && live.categories.map(categories => (categories.name)).join(', ')}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '1rem', paddingLeft: '1rem' }}>
                    <span
                style={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  padding: '0.2rem',
                  marginRight: '0.3rem'
                }}
              >
                    {live.subCategory && live.subCategory.map(subCategory => (subCategory.name)).join(', ')}
                    </span>
                    </Typography>
                </Stack>    
            </Stack>    


  
        <Stack direction="row"
            sx={{paddingLeft: '15rem'}}>
            <img src={`assets/${live.liveCard}`}     style={{
            width: '200%', 
            height: '150%', 
            objectFit: 'cover',
        }}/> 
        </Stack>    
            


        </Box>
    )
}

export default HighlightSection;