import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverImage]',
  standalone: true
})
export class HoverImageDirective {
  @Input() hoverImage: string;
  @Input() defaultImage: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.hoverImage);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.defaultImage);
  }
}
