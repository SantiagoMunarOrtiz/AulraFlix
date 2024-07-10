import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { TextField, Button, Box, Typography, Card, CardContent, CardActions } from '@mui/material';

const Video = ({ video, eliminarVideo, actualizarVideo }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(video.titulo);
  const [nuevaUrl, setNuevaUrl] = useState(video.url);

  const manejarActualizar = () => {
    actualizarVideo(video.id, { titulo: nuevoTitulo, url: nuevaUrl });
    setEditando(false);
  };

  return (
    <Card variant="outlined" sx={{ mb: 4 }}>
      <CardContent>
        {editando ? (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="Nuevo Título"
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Nueva URL"
              value={nuevaUrl}
              onChange={(e) => setNuevaUrl(e.target.value)}
            />
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={manejarActualizar}>
                Guardar
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography variant="h6" component="h3" gutterBottom>
              {video.titulo}
            </Typography>
            <ReactPlayer url={video.url} controls width="100%" />
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => setEditando(true)}>
          Editar
        </Button>
        <Button variant="contained" color="secondary" onClick={() => eliminarVideo(video.id)}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Video;
