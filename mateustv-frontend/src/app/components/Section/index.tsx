import { useEffect, useState } from "react";
import { IGenre, ILive } from "../../@libs/types";
import { LiveService } from "../../services/live-service";
import { Box, Stack, Typography } from "@mui/material";
import LiveCard from "../LiveCard";

    type SectionProps = {
        genres: IGenre;
      }
      function Section({
        genres
      }: SectionProps) {
        
        const [live, setLive] = useState<ILive[]>([]);
      
        useEffect(() => {
          
          if (genres.id) {
            LiveService.getByCategoryId(genres.id)
              .then(result => {
                setLive(result)
              });
          }
        }, []);
        
        return (
          <Box sx={{
            width: '50%',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderBottom: '0.5px inset Gray'}}>
            <Stack direction="column">    
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  paddingTop: '2rem'
                }}
              >
                { genres.name }
              </Typography>
              <Stack
                direction="row"
                gap={0.5}
                sx={{
                  overflowY: 'hidden',
                  whiteSpace: 'nowrap',
                  paddingY: '1rem'
                }}
              >
                {live.map(item => (
                  <LiveCard key={item.id} live={item} />
                ))}
      
              </Stack>
            </Stack>
          </Box>
        )
      }  

export default Section;