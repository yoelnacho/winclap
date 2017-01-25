import { Component, OnInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'jquery',
    template: '<button>{{ text }}</button>'
})

export class JqueryComponent implements OnInit {

    // recibo el mediante el atributo data el valor que envía desde el html
    @Input('data') text: string;

    constructor(private _elmRef: ElementRef) { }

    ngOnInit() {
        $(this._elmRef.nativeElement)
            .find('button')
            .on('click', function(){
                console.log('Wasaaaaaa...');
            }
        );

        // Parallax effect
        $(document).ready(function() {
            if ($("#js-parallax-window").length) {
                parallax();
            }
        });

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

    ngAfterViewInit() {
    }
}
