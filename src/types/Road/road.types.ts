export enum Difficulty {
    All = 'All',
    Low = 'Low',
    Medium = 'Medium',
    Hard = 'Hard',
}

export enum Province {
    Dolnoslaskie = 'Dolnośląskie',
    KujawskoPomorskie = 'Kujawsko-Pomorskie',
    Lubelskie = 'Lubelskie',
    Lubuskie = 'Lubuskie',
    Lodzkie = 'Łódzkie',
    Malopolskie = 'Małopolskie',
    Mazowieckie = 'Mazowieckie',
    Opolskie = 'Opolskie',
    Podkarpackie = 'Podkarpackie',
    Podlaskie = 'Podlaskie',
    Pomorskie = 'Pomorskie',
    Slaskie = 'Śląskie',
    Swietokrzyskie = 'Świętokrzyskie',
    WarminskoMazurskie = 'Warmińsko-Mazurskie',
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
