import Image from 'next/image';
import { cn } from '@/utils/classMerge';
import { Icon } from '@iconify/react/dist/iconify.js';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return (
        <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3', className)}>
            {children}
        </div>
    );
};
const Skeleton = () => (
    <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'></div>
);

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: string;
    icon?: React.ReactNode;
}) => {
    const imageSrc = header || '';
    return (
        <div
            className={cn(
                'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                className,
            )}
        >
            {header ? (
                <Image src={imageSrc} alt='image' width={600} height={200} className='max-h-[150px]' />
            ) : (
                <Skeleton />
            )}

            <div className='transition duration-200 group-hover/bento:translate-x-2'>
                <div className='flex items-center gap-3'>
                    <div>{icon}</div>
                    <div className='flex items-center'>
                        <Icon icon='stash:star-duotone' fontSize={20} />
                        <Icon icon='stash:star-duotone' fontSize={20} />
                        <Icon icon='stash:star-duotone' fontSize={20} />
                        <Icon icon='stash:star-duotone' fontSize={20} />
                        <Icon icon='stash:star-duotone' fontSize={20} />
                    </div>
                </div>
                <div className='mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200'>{title}</div>
                <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
                    {description}
                </div>
            </div>
        </div>
    );
};
