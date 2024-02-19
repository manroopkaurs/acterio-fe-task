import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logoImage from './acterio_icon.svg';

const Navbar = () => {
  return (
    <AppBar maxWidth="lg" position="sticky" style={{  backgroundColor: '#162f46', color: '#eaf2f5' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">
          <img src={ logoImage } alt="Logo" style={{ width: '100px', height: '50px' }} />
        </Link>
        </Typography>
        <div>
          <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>Home</Link>
          <Link className="nav-link" to="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Posts</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
