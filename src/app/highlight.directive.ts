import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighLight]'
})

export class HightLightDirective {
    @Input('myHighLight') highlightColor: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onmouseenter() {
        this.hightlight(this.highlightColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.hightlight(null);
    }

    private hightlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
