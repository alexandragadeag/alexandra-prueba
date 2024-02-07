export interface Book{
     id: number;
     title: string;
     sinopsis: string;
     numPages: number;
     photo: string;
     price: number;
     //  asociaciones con otras Interfaces:
     authorId: number; // Many To one
     categories: number; // Many To many

}

