import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
// import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar style={{ background: '#3cb043' }}
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        {/* <Logo /> */}
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
