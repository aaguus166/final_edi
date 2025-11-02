import { Injectable } from '@nestjs/common';
import { mascotas_dueños } from './coso_de_id';

@Injectable()
export class VeterinariaService {

    responsable: Array<any> = [];
    mascotas: Array<any> = [];

    constructor(){
        let dueños = {
            "id" : 1,
            "nombre" : "lara",
            "celular" : "29983820",
        };
        this.responsable.push(dueños);

         dueños = {
            "id" : 2,
            "nombre" : "agustina",
            "celular" : "8282878",
        };
        this.responsable.push(dueños);

        dueños = {
            "id" : 3,
            "nombre" : "chayane",
            "celular" : "2020023",
        };
        this.responsable.push(dueños);

        dueños = {
            "id" : 4,
            "nombre" : "ricardo fort",
            "celular" : "392933",
        };
        this.responsable.push(dueños);

        dueños = {
            "id" : 5,
            "nombre" : "moria casan",
            "celular" : "8282878",
        };
        this.responsable.push(dueños);

        let animales = {
            "id" : 101,
            "nombre" : "lilo",
            "sexo" : "macho",
            "tipo" : "salchicha",
            "edad" : "6",
            "ownerId" : 1
        };
        this.mascotas.push(animales);

        animales = {
            "id" : 102,
            "nombre" : "pochita",
            "sexo" : "hembra",
            "tipo" : "gato",
            "edad" : "3",
            "ownerId" : 2
        };
        this.mascotas.push(animales);

        animales = {
            "id" : 103,
            "nombre" : "rosa",
            "sexo" : "macho",
            "tipo" : "conejo",
            "edad" : "2",
            "ownerId" : 3
        };
        this.mascotas.push(animales);

        animales = {
            "id" : 104,
            "nombre" : "messi",
            "sexo" : "macho",
            "tipo" : "canario",
            "edad" : "5",
            "ownerId" : 4
        };
        this.mascotas.push(animales);

        animales = {
            "id" : 105,
            "nombre" : "lola",
            "sexo" : "hembra",
            "tipo" : "hamster",
            "edad" : "1",
            "ownerId" : 5
        };
        this.mascotas.push(animales);


    }
    getOwnerById(id: number) {
        return this.responsable.find(owner => owner.id === id);
    }

    getPetsByOwnerId(ownerId: number) {
        return this.mascotas.filter(pet => pet.ownerId === ownerId);
    }
}




