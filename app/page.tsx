import { Box, Container, Typography } from "@mui/material";
import MainMenu from "./components/main-menu";

export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box>
        <MainMenu />
      </Box>
    </Container>
  );
}
