export class FooterConfig {
    showNextRouteBtn?: boolean = true;
    nextRouteBtnText?: string = "Find Falcone!";
    showPreviousBtn?: boolean = false;
    showNextBtn?: boolean = false;
    previousBtnDisabled?: boolean = false;
    nextBtnDisabled?: boolean = false;
}

export enum FooterBtnClick {
    Previous, Next, NextRoute
}