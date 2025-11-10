import { Injectable, Body } from '@nestjs/common';
import { modeloHistorial } from './modeloHistorial';

@Injectable()
export class HistorialMedicoService {
    historyPets: Array<any> = [];
    
    constructor() {

        let historial = {
            "mascotaID": 101,
            "historia_clinica": [
                { "detalle": "vacunacion antirrabica", "fecha": "2023-01-15" }
            ]
        };
        this.historyPets.push(historial);

        historial = {
            "mascotaID": 102,
            "historia_clinica": [
                { "detalle": "desparasitacion interna", "fecha": "2023-09-10" }
            ]
        };
        this.historyPets.push(historial);

        historial = {
            "mascotaID": 103,
            "historia_clinica": [
                { "detalle": "chequeo inicial", "fecha": "2023-03-05" }
            ]
        };
        this.historyPets.push(historial);

        historial = {
            "mascotaID": 104,
            "historia_clinica": [
                { "detalle": "tratamiento por ala rota", "fecha": "2022-12-11" }
            ]
        };
        this.historyPets.push(historial);

        historial = {
            "mascotaID": 105,
            "historia_clinica": [
                { "detalle": "vacunacion inicial", "fecha": "2023-04-07" }
            ]
        };
        this.historyPets.push(historial);
    }

    getHistoryPets() {
        return this.historyPets;
    }
    
    Historypets(@Body() body: modeloHistorial) {
        let newhistorial = {
            "detalle": body.detalle,
            "fecha": body.fecha
        }
        this.historyPets.push(newhistorial);
        return this.historyPets;
    }
}
