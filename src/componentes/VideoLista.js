import { Box, Grid } from '@mui/material';
import Video from './Video';

const VideoLista = ({ videos, eliminarVideo, actualizarVideo }) => {
  return (
    <Box>
      <Grid container spacing={4}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Video
              video={video}
              eliminarVideo={eliminarVideo}
              actualizarVideo={actualizarVideo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoLista;
