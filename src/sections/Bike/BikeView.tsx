import BikeTable from './Table/BikeTable';

const BikeView = () => {
  return (
    <div className=' space-y-6'>
      <p className='max-w-[600px] '>
        Każdy osprzęt roweru ma swoje unikalne wymagania. Twoja tabela pomoże Ci
        śledzić stan wszystkich części Twojego roweru. Zarządzaj, modyfikuj,
        aktualizuj dane na bieżąco.
      </p>
      <BikeTable />
    </div>
  );
};

export default BikeView;
