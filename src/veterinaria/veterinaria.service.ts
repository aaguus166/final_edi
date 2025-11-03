import { Injectable, Body } from '@nestjs/common';
import { mascotas_dueños } from './coso_de_id';
import { modeloHistorial } from './modeloHistorial';

@Injectable()
export class VeterinariaService {

    responsable: Array<any> = [];
    mascotas: Array<any> = [];
    turnos: Array<any> = [];
    newPets: Array<any> = [];
    newResponsables: Array<any> = [];
    cambiarTurnos: Array<any> = [];
    historyPets: Array<any> = [];

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

        let historial = {
            "mascotaID": 101,
            "historia_clinica": [
                {   "detalle": "vacunacion antirrabica",
                    "fecha": "2023-01-15"
                }
            ]
            
        };
        this.historyPets.push(historial);

    };

    getResponsables() {
        return this.responsable;
    };

    
    getPetsByOwnerId(id: number) {
        console.log(`id ${id}:`);
        let resultado;
        this.mascotas.forEach(mascota => {
            if(mascota.ownerId == id){
                console.log(`Mascota: ${mascota.nombre}, Tipo: ${mascota.tipo}, Edad: ${mascota.edad}`);
                resultado = mascota;
            }
        });

        return resultado;
       
};
  
crearTurno(body: mascotas_dueños){
    this.turnos.push(body);
    return body;
};
    nuevosDueños(@Body() body: mascotas_dueños){
        this.newResponsables.push(body);
        return body;
    };

    nuevasMascotas(@Body() body: mascotas_dueños){
        this.newPets.push(body);
        return body;
    };

getnewPets() {
    return this.newPets;

};

getnewResponsables() {
    return this.newResponsables;
};

cambiarTurno(@Body() body: mascotas_dueños){
    this.cambiarTurnos.push(body);
    return body;
};

Historypets(@Body() body: modeloHistorial){
    // te llega el id de la mascota, y la sig info
// {   "detalle": "vacunacion antirrabica",
//                    "fecha": "2023-01-15"
//                }

// lo tenes que agregar al historial de la mascota correspondiente

return body;
}















}
