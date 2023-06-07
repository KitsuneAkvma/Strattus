import "./App.css";
import { Skeleton } from "@mui/material";

function App() {
  return (
    <>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}

      <Skeleton variant="rectangular" width={500} height={200} />
    </>
  );
}

export default App;
