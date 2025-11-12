import { Test, TestingModule } from '@nestjs/testing';
import { MascotasDuenosService } from './mascotas_duenos.service';

describe('MascotasDueñosService', () => {
  let service: MascotasDuenosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MascotasDuenosService],
    }).compile();

    service = module.get<MascotasDuenosService>(MascotasDuenosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
