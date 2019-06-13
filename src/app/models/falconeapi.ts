import { ITokenResponse } from './tokenresponse';

export interface IFalconeAPIRequest extends ITokenResponse {
    planet_names: Array<string>;
    vehicle_names: Array<string>;
}

export interface IFalconeAPIResponse {
    planet_name?: string;
    status?: string;
    error?: string;
}


export enum ResponseStatus {
    error = "false", success = "success"
}