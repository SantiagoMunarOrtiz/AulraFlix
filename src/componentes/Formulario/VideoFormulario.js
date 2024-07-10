import { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';

const VideoFormulario = ({ registrarVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [url, setUrl] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    registrarVideo({ titulo, url });
    setTitulo('');
    setUrl('');
  };

  const limpiarFormulario = () => {
    setTitulo('');
    setUrl('');
  };

  const descargarVideo = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = titulo || 'video';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Registrar Nuevo Video
        </Typography>
        <Box component="form" onSubmit={manejarSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Título del video"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="URL del video"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            variant="outlined"
          />
          <Box textAlign="center" mt={2}>
            <Button type="submit" variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Agregar Video
            </Button>
            <Button type="button" variant="outlined" color="secondary" size="large" sx={{ mr: 2 }} onClick={limpiarFormulario}>
              Limpiar
            </Button>
            <Button type="button" variant="contained" color="secondary" size="large" onClick={descargarVideo}>
              Descargar Video
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default VideoFormulario;
