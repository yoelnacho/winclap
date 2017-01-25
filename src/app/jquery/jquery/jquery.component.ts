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
        )
    }
}
