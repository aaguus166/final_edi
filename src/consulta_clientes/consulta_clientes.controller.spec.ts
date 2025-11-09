import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaClientesController } from './consulta_clientes.controller';

describe('ConsultaClientesController', () => {
  let controller: ConsultaClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultaClientesController],
    }).compile();

    controller = module.get<ConsultaClientesController>(ConsultaClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
