import { CircularProgress, Paper } from '@mui/material';

export const Loader = () => {
  return (
    <Paper
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </Paper>
  );
};
