import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighLight]'
})

export class HightLightDirective {
    @Input() highlightColor: string;

    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseenter') onmouseenter() {
        this.hightlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.hightlight(null);
    }

    private hightlight(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}
