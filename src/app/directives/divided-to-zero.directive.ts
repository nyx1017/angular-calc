import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[divided-to-zero]'
})

export class DividedToZeroDirective implements OnInit{
    @HostBinding('style.background') color = 'red'
    @HostBinding('style.font-size') fontSize = '20px'
    secondNumber: any;
    operator: any;
    constructor(private _element: ElementRef, private _renderer: Renderer2) {
        
    }

    ngOnInit(): void {
        this._element.nativeElement.style.background = this.operator == "/" && this.secondNumber == "0" ? 'red':'lightgrey'
    }

}