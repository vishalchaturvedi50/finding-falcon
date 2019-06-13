import { AppService } from "./app.service";
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('App Service ', () => {
    let service: AppService;
    let handler: HttpHandler;
    beforeEach(() => {
        service = new AppService(new HttpClient(handler));
    });

    it('Should have 6 Planets', () => {

    });

    it('Should have 4 Vehicles', () => {

    });

    it('Token object should not be null', () => {

    });



});