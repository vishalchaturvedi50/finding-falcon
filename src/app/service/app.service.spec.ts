import { AppService } from "./app.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IPlanets } from '../models/planets';
import { ITokenResponse } from '../models/tokenresponse';
import { IVehicles } from '../models/vehicles';

describe('App Service ', () => {

    let service: AppService;

    beforeEach(() => TestBed.configureTestingModule({
        providers: [AppService],
        imports: [HttpClientTestingModule]
    }));

    it('should be created', () => {
        service = TestBed.get(AppService);
        expect(service).toBeTruthy();

    });


    it('Should have 6 Planets', () => {
        service.getPlanetsFn().toPromise().then((resp: Array<IPlanets>) => {
            debugger;
            expect(resp.length).toEqual(5);
        });
    });

    it('Should have 4 Vehicles', () => {
        service.getVehiclesFn().toPromise().then((resp: Array<IVehicles>) => {
            debugger;
            expect(resp.length).toEqual(5);
        });
    });

    it('Token object should not be null', () => {
        service.getTokenFn().subscribe((resp: ITokenResponse) => {
            expect(resp).toBeDefined();
        });
    });



});