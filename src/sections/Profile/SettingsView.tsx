'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';
import ProfilBox from '@/ui/atmos/Boxes/ProfilBox';
import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';

import { IUser } from '@/types/User/user.types';
import { deleteUser } from '@/lib/deleteUser';

interface ISettingsView {
    user: IUser;
}
const SettingsView = ({ user }: ISettingsView) => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleDeleteUser = async () => {
        if (user.username === 'Testowe') return alert('Konto testowe nie da się usunąć');
        const userConfirmed = window.confirm('Czy na pewno chcesz usunąć konto? To jest akcja nieodwracalna.');
        if (!userConfirmed) return;

        const { error } = await deleteUser(user.id);

        if (error) {
            setError('Wystąpił błąd podczas usuwania konta. Spróbuj ponownie.');
            setSuccess(null);
        } else {
            setSuccess('Konto zostało pomyślnie usunięte.');
            setError(null);
            router.push(paths.auth.signIn);
        }
    };

    return (
        <>
            <ProfilBox>
                <LightTooltip title='Wkrótce dostępne' placement='top'>
                    <button>Zmień hasło</button>
                </LightTooltip>
            </ProfilBox>

            <ProfilBox>
                <DeleteButton title='Usuń konto' onClick={handleDeleteUser} />
                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-500'>{success}</p>}
            </ProfilBox>
        </>
    );
};

export default SettingsView;
