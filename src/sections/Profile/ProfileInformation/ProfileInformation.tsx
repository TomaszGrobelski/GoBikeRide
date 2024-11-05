import { useUpdateRespect } from '@/api/user/useUser';
import ProfilBox from '@/ui/atmos/Boxes/ProfilBox';
import MainMethodBox from '@/ui/atmos/mainMethod/MainMethod';
import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CalendarCheck, User } from 'lucide-react';
import { toast } from 'sonner';

import { IUser, RespectAction } from '@/types/User/user.types';
import colors from '@/styles/colors';

import RespectButton from './IncrementRespectButton';
import ProfileRidingStyle from './ProfileRidingStyle';
import UserInfoRow from './UserInfoRow';
import UserProfileImage from './UserProfileImage';

interface IProfileInformation {
    user: IUser;
    currentUser: IUser;
}
const ProfileInformation = ({ user, currentUser }: IProfileInformation) => {
    const { mutate: updateRespect, isPending } = useUpdateRespect();

    const handleRespect = async (action: RespectAction.INCREMENT | RespectAction.DECREMENT) => {
        const giverId = currentUser.id;
        const receiverId = user.id;

        try {
            await updateRespect({ giverId, receiverId, action });
        } catch {
            toast.error('Problem podczas aktualizacji respektu, proszę spróbować później');
        }
    };

    const hasGivenRespect = (user.receivedRespects || []).some((respect) => respect.giverId === currentUser.id);

    return (
        <ProfilBox>
            <UserProfileImage user={user} />

            <UserInfoRow>
                <User color={colors.secondary} /> {user.username}
            </UserInfoRow>

            <UserInfoRow>
                <CalendarCheck color={colors.secondary} />
                {convertToDdMmYyyyFormat(user.createdAt)}
            </UserInfoRow>

            <UserInfoRow>
                <Icon icon='bxs:cool' fontSize={24} color={colors.specialYellow} />
                <p>Respect:</p>
                <p>{user.respect}</p>
                {currentUser.id !== user.id && (
                    <>
                        {!hasGivenRespect ? (
                            <RespectButton
                                onClick={() => handleRespect(RespectAction.INCREMENT)}
                                disabled={isPending}
                                respectType={RespectAction.INCREMENT}
                            />
                        ) : (
                            <RespectButton
                                onClick={() => handleRespect(RespectAction.DECREMENT)}
                                disabled={isPending}
                                respectType={RespectAction.DECREMENT}
                            />
                        )}
                    </>
                )}
            </UserInfoRow>

            <UserInfoRow>
                <p>Preferowany styl jazdy:</p>
                <MainMethodBox method={user.mainMethod} />
                <ProfileRidingStyle />
                <p></p>
            </UserInfoRow>

            <CustomToaster />
        </ProfilBox>
    );
};

export default ProfileInformation;
