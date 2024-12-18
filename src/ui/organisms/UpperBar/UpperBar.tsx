import { useUser } from '@/api/user/useUser';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';

import CustomDropDown from './DropDown';

import '@/styles/UpperBar/upperBar.css';

const UpperBar = () => {
    const { data: user, isLoading, error } = useUser();

    return (
        <div
            style={{ width: 'calc(100% - 5rem)' }}
            className='.upperBar-bottom-border fixed right-0 top-0 z-10 flex items-center justify-end gap-4 border-b-[1px] border-gray-300 p-2 pb-14 pr-2 backdrop-blur-md'
        >
            <CustomDropDown user={user} />

            {/* <ThemeSwitch /> */}
        </div>
    );
};

export default UpperBar;
