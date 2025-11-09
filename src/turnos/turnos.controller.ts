import { Controller, Post, Body } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { turnos } from './modelo_de_id';

@Controller('turnos')
export class TurnosController {
 constructor(private readonly turnosService: TurnosService) {}

 @Post('turnos')
       crearTurno(@Body() body: turnos){
    return this.turnosService.crearTurno(body);

}; 










}
