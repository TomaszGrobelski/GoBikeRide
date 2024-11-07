import Image from 'next/image';
import EditProfilButton from '@/ui/atmos/Buttons/Profil/EditProfilButton';

import { IUser } from '@/types/User/user.types';

interface IUserProfileImage {
    user: IUser;
    isCurrentUserProfile: boolean;
}
const UserProfileImage = ({ user, isCurrentUserProfile }: IUserProfileImage) => {
    const handleUploadProfileImage = async () => {};
    const handleDeleteProfileImage = async () => {};
    return (
        <div className='flex items-center gap-2'>
            <Image
                className='rounded-full shadow-xl'
                src={user.avatar_url || '/default-avatars/male-avatar.png'}
                alt='avatar'
                width={100}
                height={100}
            />
            {isCurrentUserProfile && (
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <p>Zdjęcie profilowe</p>
                        <span className='text-[14px] text-gray-700'>PNG, JPEG poniżej 15MB</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <EditProfilButton onClick={handleUploadProfileImage}>Wgraj nowe zdjęcie</EditProfilButton>
                        <button
                            onClick={handleDeleteProfileImage}
                            className='rounded-lg border-[1px] px-2 py-1 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white'
                        >
                            Usuń zdjęcie
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfileImage;
