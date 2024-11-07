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
        <div
            className={`flex items-center justify-center rounded-xl border-[1px] border-white ${backgroundColor} min-h-7 min-w-24 px-8 py-1 text-white`}
        >
            {method ? method : '-'}
        </div>
    );
};

export default MainMethodBox;
