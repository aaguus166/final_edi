import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClientesService } from './consulta_clientes.service';

describe('ConsultaClientesService', () => {
  let service: ConsultaClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaClientesService],
    }).compile();

    service = module.get<ConsultaClientesService>(ConsultaClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
