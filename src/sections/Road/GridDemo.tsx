import React from 'react';
import Image from 'next/image';
import dash from '@/assets/photos/LightBackGround.jpg';
import { BentoGrid, BentoGridItem } from '@/ui/organisms/GridBento/GridBento';
import { Icon } from '@iconify/react/dist/iconify.js';

export function BentoGridDemo() {
    return (
        <BentoGrid className='mx-auto max-w-4xl'>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? 'md:col-span-2 cursor-pointer' : 'cursor-pointer'}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'></div>
);
const items = [
    {
        title: 'Szlak Green Velo',
        description:
            'Poznaj jeden z najdłuższych szlaków rowerowych w Polsce, przebiegający przez wschodnią część kraju.',
        header: <Image src={dash} alt='bike' className='w-full h-32' />,
        icon: <Icon icon="healthicons:low-bars" fontSize={24} />,
    },
    {
        title: 'Szlak Rowerowy Wokół Tatr',
        description: 'Szlak wokół Tatr, oferujący niezapomniane widoki na góry oraz malownicze wioski.',
        header: <Skeleton />,
        icon: <Icon icon="healthicons:medium-bars" fontSize={24}  />,
    },
    {
        title: 'Szlak Doliny Bugu',
        description: 'Rowerowa trasa wzdłuż rzeki Bug, prowadząca przez urokliwe miejsca nad brzegiem rzeki.',
        header: <Skeleton />,
        icon: <Icon icon="healthicons:chart-bars" fontSize={20}  />,
    },
    {
        title: 'Rowerowy Szlak Mazur',
        description: 'Szlak rowerowy przez malownicze jeziora i lasy Mazur, idealny dla miłośników natury.',
        header: <Skeleton />,
        icon: <Icon icon='tabler:bike' />,
    },
    {
        title: 'Szlak Bieszczadzkich Rowerów',
        description: 'Trasa rowerowa przez dzikie i górzyste Bieszczady, przeznaczona dla doświadczonych rowerzystów.',
        header: <Skeleton />,
        icon: <Icon icon='tabler:bike' />,
    },
    {
        title: 'Szlak Wzdłuż Wybrzeża Bałtyckiego',
        description: 'Rowerowa przygoda wzdłuż polskiego wybrzeża, oferująca widoki na morze i piaszczyste plaże.',
        header: <Skeleton />,
        icon: <Icon icon='tabler:bike' />,
    },
    {
        title: 'Szlak Pieniński',
        description:
            'Szlak w Pieninach, idealny dla rowerzystów, którzy chcą podziwiać wspaniałe krajobrazy i przełom Dunajca.',
        header: <Skeleton />,
        icon: <Icon icon='tabler:bike' />,
    },
];
