import { useUpdateSocialMedia } from '@/api/user/useUser';
import ProfilBox from '@/ui/atmos/Boxes/ProfilBox';
import EditProfilButton from '@/ui/atmos/Buttons/Profil/EditProfilButton';
import RHFTextField from '@/ui/molecules/RHF/RHFTextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IUser } from '@/types/User/user.types';
import { useBoolean } from '@/hooks/use-Boolean';

import { socialMediaSchema } from './socialMedia.schema';

type SocialMediaFormData = z.infer<typeof socialMediaSchema>;
interface IProfileSocial {
  user: IUser;
  isCurrentUserProfile: boolean;
}

const ProfileSocial = ({ user, isCurrentUserProfile }: IProfileSocial) => {
  const updateSocialMediaMutation = useUpdateSocialMedia();
  const editSocial = useBoolean(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(socialMediaSchema),
    defaultValues: {
      instagram: user.socialMedia?.instagram || '',
      facebook: user.socialMedia?.facebook || '',
      twitter: user.socialMedia?.twitter || '',
    },
  });

  const onSubmit = (data: SocialMediaFormData) => {
    const socialData = {
      userId: user.id,
      instagram: data.instagram,
      facebook: data.facebook,
      twitter: data.twitter,
    };

    const hasChanges =
      (socialData.instagram || '') !== (user.socialMedia?.instagram || '') ||
      (socialData.facebook || '') !== (user.socialMedia?.facebook || '') ||
      (socialData.twitter || '') !== (user.socialMedia?.twitter || '');

    if (hasChanges) {
      updateSocialMediaMutation.mutate(socialData);
      editSocial.setFalse(); // Zmień stan edytowania na fałszywy
    } else {
      editSocial.setFalse();
    }
  };

  return (
    <ProfilBox className='flex flex-col items-center justify-center gap-6'>
      <p className='text-[20px]'>Social media</p>

      <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Instagram />
          {editSocial.value ? (
            <RHFTextField
              {...register('instagram')}
              label={user.socialMedia?.instagram ? user.socialMedia?.instagram : 'Link do Instagrama'}
              error={!!errors.instagram}
              helperText={errors.instagram?.message}
              className='w-full'
            />
          ) : (
            <p className='text-gray-400'>
              {user.socialMedia?.instagram ? (
                <a
                  href={user.socialMedia.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-r from-[#E1306C] via-[#FCAF45] to-[#F77737] bg-clip-text text-transparent'
                >
                  {user.socialMedia.instagram}
                </a>
              ) : (
                'Brak Instagrama'
              )}
            </p>
          )}
        </div>

        <div className='flex items-center gap-2'>
          <Facebook />
          {editSocial.value ? (
            <RHFTextField
              {...register('facebook')}
              label={user.socialMedia?.facebook ? user.socialMedia?.facebook : 'Link do Facebooka'}
              error={!!errors.facebook}
              helperText={errors.facebook?.message}
            />
          ) : (
            <p className='text-gray-400'>
              {user.socialMedia?.facebook ? (
                <a
                  href={user.socialMedia.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-r from-[#1877F2] to-[#42B72A] bg-clip-text text-transparent'
                >
                  {user.socialMedia.facebook}
                </a>
              ) : (
                'Brak Facebooka'
              )}
            </p>
          )}
        </div>

        <div className='flex items-center gap-2'>
          <Twitter />
          {editSocial.value ? (
            <RHFTextField
              {...register('twitter')}
              label={user.socialMedia?.twitter ? user.socialMedia?.twitter : 'Link do Twittera'}
              error={!!errors.twitter}
              helperText={errors.twitter?.message}
            />
          ) : (
            <p className='text-gray-400'>
              {user.socialMedia?.twitter ? (
                <a
                  href={user.socialMedia.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gradient-to-r from-[#1DA1F2] to-[#1A91DA] bg-clip-text text-transparent'
                >
                  {user.socialMedia.twitter}
                </a>
              ) : (
                'Brak Twittera'
              )}
            </p>
          )}
        </div>

        {isCurrentUserProfile &&
          (editSocial.value ? (
            <button type='submit' className='mt-4 rounded bg-blue-500 p-2 text-white'>
              Zapisz
            </button>
          ) : (
            <EditProfilButton onClick={editSocial.setTrue}>Edytuj swoje social media</EditProfilButton>
          ))}
      </form>
    </ProfilBox>
  );
};

export default ProfileSocial;
