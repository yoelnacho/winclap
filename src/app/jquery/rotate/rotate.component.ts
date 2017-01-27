import { Component, AfterViewInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'rotate',
    template: '<span class="js-rotate">Rewards, Performance, Video</span>'
})

export class RotateComponent implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        $(".js-rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            speed: 3500 // How many milliseconds until the next word show.
        });
    }
}
