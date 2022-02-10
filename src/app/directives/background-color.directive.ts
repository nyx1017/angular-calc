import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[app-background]'
})
export class BackgroundColorDirective implements OnInit {
    @HostBinding('style.background') color = 'red';
    @HostBinding('style.font-size') fontSize = '20px'
    mainDisplay: any;
    constructor(private _element: ElementRef, private _renderer: Renderer2) {
    }
    ngOnInit(): void {
        this._element.nativeElement.style.background=this.mainDisplay=="Invalid"? 'red':'lightgrey'
    }
}
