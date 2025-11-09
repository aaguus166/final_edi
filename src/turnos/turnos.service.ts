import { Injectable, Body } from '@nestjs/common';
import { turnos } from './modelo_de_id';

@Injectable()
export class TurnosService {

 turnos: Array<any> = [];
 modificacionTurnos: Array<any> = [];

crearTurno(body: turnos){
    this.turnos.push(body);
    return body;
};

cambiarTurno(@Body() body: turnos){
    this.modificacionTurnos.push(body);
    return body;
};





};

