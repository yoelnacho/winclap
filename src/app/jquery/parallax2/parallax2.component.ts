import { Component, OnInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'parallax2',
    templateUrl: './parallax2.component.html',
    styleUrls: ['./parallax2.component.scss']
})

export class Parallax2Component implements OnInit {

    constructor(private _elmRef: ElementRef) { }

    ngOnInit() {}

    ngAfterViewInit() {
        if ($("#js-parallax-window").length) {
            parallax();
        }

        $(window).scroll(function(e) {
            if ($("#js-parallax-window").length) {
                parallax();
            }
        });

        function parallax(){
            if( $("#js-parallax-window").length > 0 ) {
                var plxBackground = $("#js-parallax-background");
                var plxWindow = $("#js-parallax-window");

                var plxWindowTopToPageTop = $(plxWindow).offset().top;
                var windowTopToPageTop = $(window).scrollTop();
                var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

                var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
                var windowInnerHeight = window.innerHeight;
                var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
                var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
                var plxSpeed = 0.35;

                plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
            }
        }
    }
}
