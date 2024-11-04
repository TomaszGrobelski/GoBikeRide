import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

interface ProfileTabsProps {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

// Stylowanie zakładek
const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: '#B1C181', 
    
  },
}));

const ProfileTabs = ({ value, handleChange }: ProfileTabsProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit' 
        aria-label='profile tabs'
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTabs-indicator': {
            backgroundColor: '#B1C181',
          },
        }}
      >
        <StyledTab value='profile' label='Profil' />
        <StyledTab value='settings' label='Ustawienia' />
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;