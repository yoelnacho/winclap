import { Component, OnInit } from '@angular/core';
declare var AOS: any;
declare var $: any;

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
    title: string;
    subtitle: string;

    constructor() { }

    ngOnInit() {
        this.title = 'THE WORLD’S MOST POWERFUL CPI SELF SERVE PLATFORM';
        this.subtitle = 'Take full control of your campaigns. Upload, manage, pause and optimize your campaigns anytime 24/7. No more waiting for your account manager to answer.';

        AOS.init({
            duration: 1200,
        });

        $(window).scrollTop(0);
        $('[role="banner"]').show();
        $('body').addClass('page-internal');
    }
}
