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
    <div className='space-y-6'>
      <p className='max-w-[600px] text-balance tracking-tight'>
        Każdy osprzęt roweru ma swoje unikalne wymagania. Twoja tabela pomoże Ci
        śledzić stan wszystkich części Twojego roweru. Zarządzaj, modyfikuj,
        aktualizuj dane na bieżąco.
      </p>
      <BikeTable user={user} />
    </div>
  );
};

export default BikeView;
