/*en este arhivo hice Rregistrar y consultar mascotas y sus dueños. A la vez nuevos clientes que ingresan con sus mascotas*/ 

import { Injectable, Body } from '@nestjs/common';
import { mascotas_duenos } from './modelo_de_id';
import { modeloHistorial } from '../historial_medico/modeloHistorial';

@Injectable()
export class MascotasDuenosService {
    responsable: Array<any> = [];
    mascotas: Array<any> = [];
    
constructor() {
    
    const arrayDuenos = [
      { id: 1, nombre: 'lara', celular: '29983820' },
      { id: 2, nombre: 'agustina', celular: '8282878' },
      { id: 3, nombre: 'chayane', celular: '2020023' },
      { id: 4, nombre: 'ricardo fort', celular: '392933' },
      { id: 5, nombre: 'moria casan', celular: '8282878' },
    ];
    this.responsable.push(arrayDuenos);

    
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

    nuevosDuenos(@Body() body: mascotas_duenos){
        this.responsable.push(body);
        return body;
    };

    nuevasMascotas(@Body() body: mascotas_duenos){
        this.mascotas.push(body);
        return body;
    };

getnewPets() {
    return this.mascotas;

};

getnewResponsables() {
    return this.responsable;
};








};


























