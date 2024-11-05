import { ReactNode } from 'react';

interface IUserInfoRowProps {
    children: ReactNode;
}

const UserInfoRow = ({ children }: IUserInfoRowProps) => {
    return <p className='flex items-center gap-2'>{children}</p>;
};

export default UserInfoRow;
