import { Controller, Get, Put, Post, Param } from '@nestjs/common';

@Controller('veterinaria')
export class VeterinariaController {

    @Get(":id")
    buscarMascotas(@Param('id') id: number): string {
        return `Se buscan las mascotas del dueño con id ${id}`;
    }



}
