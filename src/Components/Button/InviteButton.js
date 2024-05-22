import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    blue: {
      dark: '#01579b',
    },
  },
});
function InviteButton() {
  return (
    <div className="btn">
      <ThemeProvider theme={theme}>
     <Button variant="contained" sx={{ bgcolor: 'blue.dark'}}>INVITE</Button>
     </ThemeProvider>
    </div>
  );
}

export default InviteButton;
