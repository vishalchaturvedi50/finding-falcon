import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from 'src/environments/environment';
import { IPlanets } from '../models/planets';
import { IVehicles } from '../models/vehicles';
import { ITokenResponse } from '../models/tokenresponse';
import { IFalconeAPIRequest, IFalconeAPIResponse } from '../models/falconeapi';

@Injectable()
export class AppService {

    /* This variable stores header config for POST request */
    private headerConfig: HttpHeaders = new HttpHeaders({ "Accept": "application/json" });

    /* A Variable to hold the token  */
    private apiToken: ITokenResponse;

    /* Stores a list of planets */
    public planetsList: Array<IPlanets> = [];

    /* Stores a list of vehicle */
    public vehicleList: Array<IVehicles> = [];

    /* FORM DATA */
    public falconeRequestData: IFalconeAPIRequest = { planet_names: [], vehicle_names: [] };

    constructor(private httpClient: HttpClient) {
        this.getPlanetsFn();
        this.getVehiclesFn();
        this.getTokenFn();
    }

    /**
     * A function to get list of available vehicles
     */
    getVehiclesFn() {
        this.httpClient.get(apiUrls.getVehicles).subscribe((response: Array<IVehicles>) => {
            this.vehicleList = response;
        })
    }

    /**
     * A function to get list of available Planets
     */
    getPlanetsFn() {
        this.httpClient.get(apiUrls.getPlanets).subscribe((response: Array<IPlanets>) => {
            this.planetsList = response;
        })
    }

    /**
     * A function to get the token if it doesn't already exsists
     */
    getTokenFn() {
        this.httpClient.post(apiUrls.getToken, null, { headers: this.headerConfig }).
            subscribe((response: ITokenResponse) => {
                this.apiToken = response;
            })
    }

    /**
     * Function which will help us with the results of the request for searching falcon
     * @param requestBody - Accepts IFalconeAPIRequest type object
     */
    findFalconeFn() {
        let requestBody = this.falconeRequestData;
        requestBody.token = this.apiToken.token;
        return this.httpClient.post(apiUrls.findResponse, requestBody, { headers: this.headerConfig });
    }

}