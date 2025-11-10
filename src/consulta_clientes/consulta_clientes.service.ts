/*en estearchivo se encuentra la parte de consultar la lista de clientes que debe agendar un chequeo anual, o vacuna próxima*/ 

import { Injectable } from '@nestjs/common'
import { consultas } from './modeloHistorial';

@Injectable()
export class ConsultaClientesService {
    historyPets: Array<any> = [];

private readonly responsables = [
      { id: 1, nombre: 'Lara', celular: '29983820' },
      { id: 2, nombre: 'Agustina', celular: '8282878' },
      { id: 3, nombre: 'Chayane', celular: '2020023' },
    ];

    private readonly mascotas = [
      { id: 101, nombre: 'Lilo', tipo: 'Perro', edad: 6, ownerId: 1 },
      { id: 102, nombre: 'Pochita', tipo: 'Gato', edad: 3, ownerId: 2 },
      { id: 103, nombre: 'Rosa', tipo: 'Conejo', edad: 2, ownerId: 3 },
    ];

    private readonly historial = [
      {
        mascotaID: 101,
        historia_clinica: [
          { detalle: 'Vacunación antirrabica', fecha: '20/04/2025' },
        ],
      },
      {
        mascotaID: 102,
        historia_clinica: [
          { detalle: 'Vacunacion anual', fecha: '9/11/2025' },
        ],
      },
      {
        mascotaID: 103,
        historia_clinica: [], // sin vacunas
      },
    ];

    Historypets( body: consultas){
    let newhistorial= {
        "detalle": body.detalle,
        "fecha": body.fecha
    }
    this.historyPets.push(this.historial);
    return this.historyPets;

}



}
