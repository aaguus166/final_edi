/*en este arhivo hice Rregistrar y consultar mascotas y sus dueños. A la vez nuevos clientes que ingresan con sus mascotas*/ 

import { Injectable, Body } from '@nestjs/common';
import { mascotas_dueños } from './modelo_de_id';
import { modeloHistorial } from './modeloHistorial';

@Injectable()
export class MascotasDueñosService {
    responsable: Array<any> = [];
    mascotas: Array<any> = [];
    newPets: Array<any> = [];
    newResponsables: Array<any> = [];



constructor() {
    
    const arrayDueños = [
      { id: 1, nombre: 'lara', celular: '29983820' },
      { id: 2, nombre: 'agustina', celular: '8282878' },
      { id: 3, nombre: 'chayane', celular: '2020023' },
      { id: 4, nombre: 'ricardo fort', celular: '392933' },
      { id: 5, nombre: 'moria casan', celular: '8282878' },
    ];
    this.responsable.push(arrayDueños);

    
    const arrayAnimales = [
      { id: 101, nombre: 'lilo', sexo: 'macho', tipo: 'salchicha', edad: 6, ownerId: 1 },
      { id: 102, nombre: 'pochita', sexo: 'hembra', tipo: 'gato', edad: 3, ownerId: 2 },
      { id: 103, nombre: 'rosa', sexo: 'macho', tipo: 'conejo', edad: 2, ownerId: 3 },
      { id: 104, nombre: 'messi', sexo: 'macho', tipo: 'canario', edad: 5, ownerId: 4 },
      { id: 105, nombre: 'lola', sexo: 'hembra', tipo: 'hamster', edad: 1, ownerId: 5 },
    ];
    this.mascotas.push(arrayAnimales);
  }

getResponsables() {
    return this.responsable;
  }

  getPetsByOwnerId(id: number) {
        console.log(`id ${id}:`);
        let resultado;
        this.mascotas.forEach(mascota => {
            if(mascota.ownerId == id){
                console.log(`Mascota: ${mascota.nombre}, Tipo: ${mascota.tipo}, Edad: ${mascota.edad}`);
                resultado = mascota;
            };
        });

        return resultado;
       
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








};


























