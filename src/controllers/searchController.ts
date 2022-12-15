import { Request, Response } from "express";
import * as PetModel from "../models/Pet";


type PetOptionActive = {
    dog: boolean,
    cat: boolean,
    fish: boolean,
    all: boolean
}

let isActive: PetOptionActive = {dog: false, cat: false,fish: false, all: false};


export function search(req: Request, res: Response){
    const query = req.query.q as string;
    if (query && query != "") {
        const list  = PetModel.getPetsByName(query);
        res.render("pages/search", {
            list,
            query,
            isActive
        });
    }else{
        res.redirect("/");
    }

}