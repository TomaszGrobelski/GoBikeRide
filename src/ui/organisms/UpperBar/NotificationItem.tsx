import Link from 'next/link';
import { paths } from '@/routes/paths';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { Icon } from '@iconify/react/dist/iconify.js';

import { INotification, NotyficationType } from '@/types/User/user.types';

interface NotificationItemProps {
    notification: INotification;
    handleDeleteNotification: (id: number) => void;
    isDeleteNotification: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
    notification,
    handleDeleteNotification,
    isDeleteNotification,
}) => {
    const linkPath =
        notification.type === NotyficationType.COMMENT
            ? `${paths.dashboard.posts}#post-${notification.postId}`
            : `${paths.dashboard.profil}/${notification.sender.id}`;

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        handleDeleteNotification(notification.id);
    };

    return (
        <Link href={linkPath}>
            <div className='relative z-20 font-roboto w-full rounded-lg bg-yellow-300/80 p-2 '>
                <button
                    onClick={handleDeleteClick}
                    disabled={isDeleteNotification}
                    className='absolute right-0 top-0 z-50'
                >
                    <Icon icon='iconamoon:close-fill' fontSize={22} />
                </button>
                <p className='font-bold'>{notification.sender.username}</p>
                <p>{notification.message}</p>
                <p>{convertToDdMmYyyyFormat(notification.createdAt)}</p>
            </div>
        </Link>
    );
};

export default NotificationItem;
