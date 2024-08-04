'use client';

import { useUser } from '@/api/user/useUser';

import BikeTable from './Table/BikeTable';

const BikeView = () => {
  const { data: user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (!user) {
    return <div>Użytkownik nie jest zalogowany</div>;
  }

  return (
    <section className='space-y-16 p-6 flex flex-col items-center'>
      <p className='max-w-[650px] text-[20px] leading-tight text-balance tracking-tight self-start shadow-md rounded-3xl p-4 px-6 '>
        Każdy osprzęt roweru ma swoje unikalne wymagania. Twoja tabela pomoże Ci
        śledzić stan wszystkich części Twojego roweru. Zarządzaj, modyfikuj,
        aktualizuj dane na bieżąco!
      </p>
      <BikeTable user={user} />
    </section>
  );
};

export default BikeView;
