"use client"; // This ensures that the component is client-side rendered

import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       <div className="justify-items-end ">
       {/* <nav className="flex space-x-4 text-gray-800 dark:text-white">
  
          <span><Link href="/" className="hover:text-indigo-500 hover:p-1">Home</Link></span>

    
          <span><Link href="/about1" className="hover:text-blue-500 hover:bg-gray-300 hover:p-1">Single Product</Link></span>
          

          <span><Link href="/about2" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">About US</Link></span>
          
   
          <span><Link href="/about3" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Products</Link></span>
          


          <span><Link href="/about5" className="hover:text-indigo-500 hover:bg-gray-300 hover:p-1">Page 5</Link></span>
        </nav>*/}
     
      
      <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}>
        <Typography sx={{ minWidth: 100 }}><Link href="/" className="hover:text-indigo-500 ">Home</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="/about1" className="hover:text-blue-500 hover:bg-gray-300">Single Product</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="/about2" className="hover:text-indigo-500 hover:bg-gray-300">About US</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="/about3" className="hover:text-indigo-500 hover:bg-gray-300">Products</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link href="/about5" className="hover:text-indigo-500 hover:bg-gray-300">Page 5</Link></Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {/* <PersonAdd fontSize="small" /> */}<Avatar />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {/* <Settings fontSize="small" /> */}<Avatar />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {/* <Logout fontSize="small" /> */}<Avatar />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
    </div> 
    </div>
  );
}
