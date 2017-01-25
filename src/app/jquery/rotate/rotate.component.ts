import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'rotate',
    template: '<h3 class="headline2">[ <span class="js-rotate">Rewards, Performance, Video</span> ]</h3>'
})

export class RotateComponent implements AfterViewInit {

    constructor(private _elmRef: ElementRef) { }

    ngAfterViewInit() {
        $(".js-rotate").textrotator({
            animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            speed: 1750 // How many milliseconds until the next word show.
        });
    }
}
