export interface Persona{
    id?: number;
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

export interface experiencia{
    id?:number;
    position: string;
    institution: string;
    img?: string;
    start_year: string;
    end_year?:string;
}

export interface educacion{
    id?:number;
    institution: string;
    title: string;
    img?: string;
    score: number;
    start: string;
    end?:string;
}

export interface Hardskill{
    name: string;
    percentage: number;
}

export interface Softskill{
    name: string;
    percentage: number;
}

export interface project{
    id?: number; 
    name: string;
    start: string;
    end?: string;
    description: string;
}