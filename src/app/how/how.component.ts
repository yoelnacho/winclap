import { Component, OnInit } from '@angular/core';
declare var AOS: any;
declare var $: any;

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent implements OnInit {
    title: string;
    subtitle: string;

    constructor() { }

    ngOnInit() {
        this.title = 'ADVERTISING POWERED BY INNOVATIVE MOBILE AD TECHNOLOGY';
        this.subtitle = 'Reach 99.6% of the world’s audience with a single login, while our algorithm optimizes your campaigns by the last event point, not by click or even conversion.';

        AOS.init({
            duration: 1200,
        });
        
        $(window).scrollTop(0);
        $('[role="banner"]').show();
        $('body').addClass('page-internal');
    }
}
