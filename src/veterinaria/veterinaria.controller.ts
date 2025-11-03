import { Controller, Get,Post, Param, Put, Body } from '@nestjs/common';
import { VeterinariaService } from './veterinaria.service';
import { mascotas_dueños } from './coso_de_id';
import { modeloHistorial } from './modeloHistorial';


@Controller('veterinaria')
export class VeterinariaController {
constructor(private readonly VeterinariaService: VeterinariaService){}

@Get()
getResponsables(){
    return this.VeterinariaService.getResponsables();
}

        @Get(":id")
        getPetsByOwnerId(@Param('id') id: number) {
            return this.VeterinariaService.getPetsByOwnerId(id);
        };

        @Post('turnos')
       crearTurno(@Body() body: mascotas_dueños){
    return this.VeterinariaService.crearTurno(body);

}; 
@Post('nuevosDueños')
nuevosDueños(@Body() body: mascotas_dueños){
    return this.VeterinariaService.nuevosDueños(body);

};

@Post('nuevasMascotas')
nuevasMascotas(@Body() body: mascotas_dueños){
    return this.VeterinariaService.nuevasMascotas(body);

};


@Get()
getnewPets(){
    return this.VeterinariaService.getnewPets();
}

@Get()
getnewResponsables(){
    return this.VeterinariaService.getnewResponsables();    

};
@Put('cambiarTurno')
cambiarTurno(@Body() body: mascotas_dueños){
    return this.VeterinariaService.cambiarTurno(body);
};

@Post('historyPets')
historyPets(@Body() body: modeloHistorial){
    return this.VeterinariaService.Historypets(body);
}





















};