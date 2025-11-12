import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { TurnosController } from './turnos/turnos.controller';
import { TurnosService } from './turnos/turnos.service';


import { HistorialMedicoController } from './historial_medico/historial_medico.controller';
import { HistorialMedicoService } from './historial_medico/historial_medico.service';

import { ConsultaClientesController } from './consulta_clientes/consulta_clientes.controller';
import { ConsultaClientesService } from './consulta_clientes/consulta_clientes.service';

import { MascotasDuenosController } from './mascotas_duenos/mascotas_duenos.controller';
import { MascotasDuenosService } from './mascotas_duenos/mascotas_duenos.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    HistorialMedicoController,
    ConsultaClientesController,
    MascotasDuenosController,
    TurnosController,
  ],
  providers: [
    AppService,
    TurnosService,
    HistorialMedicoService,
    ConsultaClientesService,
    MascotasDuenosService,
  ],
})
export class AppModule {}
