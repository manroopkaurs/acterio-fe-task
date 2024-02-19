import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar maxWidth="lg" position="static" style={{  backgroundColor: '#0c3b2e', color: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Acterio Blog Post
        </Typography>
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>Home</Link>
          <Link to="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Posts</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
