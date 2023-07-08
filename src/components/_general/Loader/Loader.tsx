import { CircularProgress, Paper } from '@mui/material';

export const Loader = () => {
  return (
    <Paper
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
      }}
    >
      <CircularProgress size={100} sx={{ color: '#a1b6ff' }} />
    </Paper>
  );
};
