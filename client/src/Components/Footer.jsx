import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright(props) {
    return (
        <footer>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/zogratis17">
        Hari Prasath N T
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
            </Typography>
            

        </footer>
      
    );
  }


const Footer = () => {
  return (
    <div>
      
          <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  )
}

export default Footer
