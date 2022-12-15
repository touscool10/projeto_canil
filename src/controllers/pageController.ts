import { Request, Response } from "express";
import * as PetModel from "../models/Pet";

type PetOptionActive = {
    dog: 'active'   | '',
    cat: 'active'   | '',
    fish: 'active'  | '',
    all: 'active'   | ''
}

let isActive: PetOptionActive = {dog: '', cat: '',fish: '', all: ''};


export function home(req: Request, res: Response) {
    isActive = {dog: '', cat: '',fish: '', all: 'active'};
    const list  = PetModel.getAll();
    const banner = {
        title: "Todos os animais",
        image:  "allanimals.jpg"
    }
    res.render("pages/page", {
        list,
        banner,
        isActive
    });
}
export function dogs(req: Request, res: Response){
    isActive = {dog: 'active', cat: '',fish: '', all: ''};
    const list  = PetModel.getPetsByType('dog');
    const banner = {
        title: "Cachorros",
        image:  "banner_dog.jpg"
    }
    res.render("pages/page", {
        list,
        banner,
        isActive
    });
}
export function cats(req: Request, res: Response){
    isActive = {dog: '', cat: 'active',fish: '', all: ''};
    const list  = PetModel.getPetsByType('cat');
    const banner = {
        title: "Gatos",
        image:  "banner_cat.jpg"
    }
    res.render("pages/page", {
        list,
        banner,
        isActive
    });
}
export function fishes(req: Request, res: Response){
    isActive = {dog: '', cat: '', fish: 'active', all: ''};
    const list  = PetModel.getPetsByType('fish');
    const banner = {
        title: "Peixes",
        image:  "banner_fish.jpg"
    }
    res.render("pages/page", {
        list,
        banner,
        isActive
    });
}
    


