import { Test, TestingModule } from '@nestjs/testing';
import { MascotasDueñosService } from './mascotas_dueños.service';

describe('MascotasDueñosService', () => {
  let service: MascotasDueñosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MascotasDueñosService],
    }).compile();

    service = module.get<MascotasDueñosService>(MascotasDueñosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
