import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'rotate',
    template: '<h3 class="js-rotate">Foundation|Bootstrap|Ruby on Rails|PHP|Jekyll|jQuery|Animate.css|Sass|Autoprefixer|Stylus|Jade|Slim|HAML|Octopress</h3>'
})

export class RotateComponent implements AfterViewInit {

    constructor(private _elmRef: ElementRef) { }

    ngAfterViewInit() {
        $(".js-rotate").textrotator({
            animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 1000 // How many milliseconds until the next word show.
        });
    }
}
