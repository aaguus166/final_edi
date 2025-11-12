import { Controller, Get,Post, Param,Body } from '@nestjs/common';
import { MascotasDuenosService } from './mascotas_duenos.service';
import { mascotas_duenos } from './modelo_de_id';
import { modeloHistorial } from '../historial_medico/modeloHistorial';


@Controller('mascotas-duenos')
export class MascotasDuenosController {
constructor(private readonly mascotasDuenosService: MascotasDuenosService) {}

@Get('responsables')
getResponsables() {
    return this.mascotasDuenosService.getResponsables();
  }

@Get('mascotas/:id')
getPetsByOwnerId(@Param('id') id: number) {
    return this.mascotasDuenosService.getPetsByOwnerId(id);
  };
  @Post('nuevosDueños')
nuevosDueños(@Body() body: mascotas_duenos){
    return this.mascotasDuenosService.nuevosDuenos(body);

};

@Post('nuevasMascotas')
nuevasMascotas(@Body() body: mascotas_duenos){
    return this.mascotasDuenosService.nuevasMascotas(body);

};


@Get()
getnewPets(){
    return this.mascotasDuenosService.getnewPets();
};

@Get()
getnewResponsables(){
    return this.mascotasDuenosService.getnewResponsables();    

};


}