import { Controller, Post, Body } from '@nestjs/common';
import { ConsultaClientesService } from './consulta_clientes.service';
import { consultas } from './modeloHistorial';

@Controller('consulta-clientes')
export class ConsultaClientesController {
constructor(private readonly consultaClientesService: ConsultaClientesService) {} 

@Post('historyPets')
historyPets(@Body() body: consultas){
    return this.consultaClientesService.Historypets(body);
}
}