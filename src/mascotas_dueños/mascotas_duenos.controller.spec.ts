import { Test, TestingModule } from '@nestjs/testing';
import { MascotasDueñosController } from './mascotas_duenos.controller';

describe('MascotasDueñosController', () => {
  let controller: MascotasDueñosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MascotasDueñosController],
    }).compile();

    controller = module.get<MascotasDueñosController>(MascotasDueñosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
