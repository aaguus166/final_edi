import { Controller, Get,Post, Param, Put, Body } from '@nestjs/common';
import { MascotasDueñosService } from './mascotas_dueños.service';
import { mascotas_dueños } from './modelo_de_id';
import { modeloHistorial } from '../historial_medico/modeloHistorial';


@Controller('mascotas-dueños')
export class MascotasDueñosController {
constructor(private readonly mascotasDueñosService: MascotasDueñosService) {}

@Get('responsables')
getResponsables() {
    return this.mascotasDueñosService.getResponsables();
  }

@Get('mascotas/:id')
getPetsByOwnerId(@Param('id') id: number) {
    return this.mascotasDueñosService.getPetsByOwnerId(id);
  };
  @Post('nuevosDueños')
nuevosDueños(@Body() body: mascotas_dueños){
    return this.mascotasDueñosService.nuevosDueños(body);

};

@Post('nuevasMascotas')
nuevasMascotas(@Body() body: mascotas_dueños){
    return this.mascotasDueñosService.nuevasMascotas(body);

};


@Get()
getnewPets(){
    return this.mascotasDueñosService.getnewPets();
};

@Get()
getnewResponsables(){
    return this.mascotasDueñosService.getnewResponsables();    

};


}