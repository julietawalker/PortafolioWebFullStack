export interface Hardskill{
    name: string;
    percentage: number;
}

export interface Softskill{
    name: string;
    percentage: number;
}

export interface project{
    name: string;
    start: string;
    end?: string;
    description: string;
}

export interface Persona{
    name: string;
    lastname: string;
    nationality: string;
    img_profile: string;
    img_bg_header: string;
    position: string;
    acerca_de: string;
    address:{
        street: string;
        city: string;
        province: string;
        country: string;
    };
}
