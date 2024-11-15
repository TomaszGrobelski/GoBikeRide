import { Icon } from '@iconify/react';

interface IStarRating {
    rating: number;
}
function StarRating({ rating }: IStarRating) {
    const totalStars = 5;

    return (
        <div className='flex items-center'>
            {Array.from({ length: totalStars }, (_, index) => (
                <Icon
                    key={index}
                    icon={index < rating ? 'fluent-emoji-flat:star' : 'ci:star'}
                    fontSize={20}
                    color={index < rating ? '#FFD700' : undefined}
                />
            ))}
        </div>
    );
}

export default StarRating;
