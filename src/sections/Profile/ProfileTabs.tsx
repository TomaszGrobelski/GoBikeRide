import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface ProfileTabsProps {
    value: string;
    handleChange: (event: React.SyntheticEvent, newValue: string) => void;
    isCurrentUserProfile: boolean;
}

// Stylowanie zakładek
const StyledTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        color: '#B1C181',
    },
}));

const ProfileTabs = ({ value, isCurrentUserProfile, handleChange }: ProfileTabsProps) => {
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
                {isCurrentUserProfile && <StyledTab value='settings' label='Ustawienia' />}
            </Tabs>
        </Box>
    );
};

export default ProfileTabs;
