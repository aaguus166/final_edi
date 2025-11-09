import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeterinariaController } from './mascotas_dueños1/veterinaria.controller'; 
import { VeterinariaService } from './mascotas_dueños1/veterinaria.service';       
import { TurnosService } from './turnos/turnos.service';
import { TurnosController } from './turnos/turnos.controller';
import { TurnoController } from './turno/turno.controller';
import { HistorialMedicoService } from './historial_medico/historial_medico.service';
import { HistorialMedicoController } from './historial_medico/historial_medico.controller';
import { ConsultaClientesService } from './consulta_clientes/consulta_clientes.service';
import { ConsultaClientesController } from './consulta_clientes/consulta_clientes.controller';
import { MascotasDueñosService } from './mascotas_dueños/mascotas_dueños.service';
import { MascotasDueñosController } from './mascotas_dueños/mascotas_dueños.controller';
import { TurnosService } from './turnos/turnos.service';

@Module({
  imports: [],
  controllers:[AppController,VeterinariaController, TurnoController, HistorialMedicoController, ConsultaClientesController, MascotasDueñosController, TurnosController],
  providers: [AppService, VeterinariaService, TurnosService, HistorialMedicoService, ConsultaClientesService, MascotasDueñosService],
})
export class AppModule {}
