import { Controller, Get,Post, Param, Body } from '@nestjs/common';
import { VeterinariaService } from './veterinaria.service';
import { mascotas_dueños } from './coso_de_id';

@Controller('veterinaria')
export class VeterinariaController {
constructor(private readonly VeterinariaService: VeterinariaService){}

@Get()
getResponsables(){
    return this.VeterinariaService.getResponsables();
}

        @Get(":id")
        getPetsByOwnerId(@Param('id') id: number): string {
            return this.VeterinariaService.getPetsByOwnerId(id);
        };

        @Post()
       crearTurno(@Body() body: mascotas_dueños){
    return this.VeterinariaService.crearTurno(body);
};

    




}
