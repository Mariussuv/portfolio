import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function SimpleBottomNavigation({changeTab}: {changeTab: (tab: number)=> void} ) {
  const [value, setValue] = React.useState(0);

  return (
    <div className=' fixed bottom-0 w-full bg-bg-primary'>

    <Box>
      <BottomNavigation
        className=' bg-bg-primary'
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          changeTab(newValue)
        }}
      >
        {/* <BottomNavigationAction label="About me" icon={<PersonIcon />} />
        <BottomNavigationAction label="Experience" icon={<LibraryAddCheckIcon />} />
        <BottomNavigationAction label="Contact" icon={<AlternateEmailIcon />} /> */}
      </BottomNavigation>
    </Box>
    </div>
  );
}