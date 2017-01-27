import { Component, OnInit } from '@angular/core';
declare var AOS: any;
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title: string = 'winclap works!';

    constructor() { }

    ngOnInit() {
        AOS.init({
            duration: 1200,
        });

        $(window).scrollTop(0);
        $('[role="banner"]').hide();

        var stickyNavTop = $('.sticky').offset().top;
        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.sticky').addClass('is-sticky');
        } else {
            $('.sticky').removeClass('is-sticky');
        }
        };

        stickyNav();

        $(window).scroll(function() {
          stickyNav();
        });
    }
}
