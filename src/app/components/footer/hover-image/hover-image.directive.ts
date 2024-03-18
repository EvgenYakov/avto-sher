import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverImage]',
  standalone: true,
})
export class HoverImageDirective {
  @Input() appHoverImage: string;
  @Input() defaultImage: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.appHoverImage);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.defaultImage);
  }
}
