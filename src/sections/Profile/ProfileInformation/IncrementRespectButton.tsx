import { ButtonHTMLAttributes } from 'react';
import { ThumbsUp } from 'lucide-react';

import { RespectAction } from '@/types/User/user.types';

interface IRespectButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    respectType: RespectAction.INCREMENT | RespectAction.DECREMENT;
}
const RespectButton = ({ onClick, respectType, ...props }: IRespectButton) => {
    return (
        <button
            // onClick={() => handleRespect(RespectAction.INCREMENT)}
            // disabled={isPending}
            onClick={onClick}
            className={`hover mb-1 ml-2 flex items-center justify-center ${respectType === RespectAction.DECREMENT ? 'rotate-180' : ''} `}
            {...props}
        >
            <ThumbsUp strokeWidth={2.5} size={22} className='hover:scale-110' />
        </button>
    );
};

export default RespectButton;
