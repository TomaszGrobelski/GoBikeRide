'use client';

import { useUser } from '@/api/user/useUser';
import UserNotLogged from '@/ui/molecules/Error/UserNotLogged';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import BikeTable from './Table/BikeTable';

const BikeView = () => {
  const { data: user, isLoading, error } = useUser();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <UserNotLogged isLogged={!user} />; 
  }

  return (
    <section className='flex h-full flex-col items-center space-y-16 p-6'>
      <p className='max-w-[650px] self-start text-balance rounded-3xl bg-white p-4 px-6 text-[20px] leading-tight tracking-tight shadow-sm shadow-secoundSea'>
        Każdy osprzęt roweru ma swoje unikalne wymagania. Twoja tabela pomoże Ci
        śledzić stan wszystkich części Twojego roweru. Zarządzaj, modyfikuj,
        aktualizuj dane na bieżąco!
      </p>
      <BikeTable user={user} />
    </section>
  );
};

export default BikeView;
