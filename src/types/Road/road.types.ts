export enum Difficulty {
    All = 'All',
    Low = 'Low',
    Medium = 'Medium',
    Hard = 'Hard',
}

export enum Province {
    Dolnoslaskie = 'Dolnoslaskie',
    KujawskoPomorskie = 'KujawskoPomorskie',
    Lubelskie = 'Lubelskie',
    Lubuskie = 'Lubuskie',
    Lodzkie = 'Lodzkie',
    Malopolskie = 'Małopolskie',
    Mazowieckie = 'Mazowieckie',
    Opolskie = 'Opolskie',
    Podkarpackie = 'Podkarpackie',
    Podlaskie = 'Podlaskie',
    Pomorskie = 'Pomorskie',
    Slaskie = 'Slaskie',
    Swietokrzyskie = 'Swietokrzyskie',
    WarminskoMazurskie = 'WarminskoMazurskie',
    Wielkopolskie = 'Wielkopolskie',
    Zachodniopomorskie = 'Zachodniopomorskie',
}

export interface ITrail {
    title: string;
    description: string;
    difficulty: Difficulty;
    province: Province;
    imageUrl: string;
    rating: number;
}

export interface ITrailFilters {
    name: string;
    province: Province | '';
    difficulty: Difficulty;
}
