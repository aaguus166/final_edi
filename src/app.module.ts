import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeterinariaController } from './veterinaria/veterinaria.controller'; 
import { VeterinariaService } from './veterinaria/veterinaria.service';       

@Module({
  imports: [],
  controllers:[AppController,VeterinariaController],
  providers: [AppService, VeterinariaService],
})
export class AppModule {}
