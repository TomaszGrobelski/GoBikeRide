import { MainMethod } from '@/types/User/user.types';

interface IMainMethod {
  method: MainMethod;
}

const MainMethodBox = ({ method }: IMainMethod) => {
  const methodColors: Record<MainMethod, string> = {
    [MainMethod.Szosowy]: 'bg-[#285F6B]',
    [MainMethod.Gravel]: 'bg-[#408fe3]',
    [MainMethod.Gorski]: 'bg-[#2C5F2D]',
  };

  const backgroundColor = methodColors[method] || methodColors[MainMethod.Szosowy];

  return (
    <div className={`rounded-full border-[1px] border-white ${backgroundColor} px-8 py-1 text-white`}>{method}</div>
  );
};

export default MainMethodBox;
