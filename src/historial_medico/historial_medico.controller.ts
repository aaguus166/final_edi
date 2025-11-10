import { Controller, Post, Body } from '@nestjs/common';
import { HistorialMedicoService } from './historial_medico.service';
import { modeloHistorial } from './modeloHistorial';

@Controller('historial-medico')
export class HistorialMedicoController {
constructor(private readonly historialMedicoService: HistorialMedicoService) {} 

@Post('historyPets')
historyPets(@Body() body: modeloHistorial){
    return this.historialMedicoService.Historypets(body);
};




}
