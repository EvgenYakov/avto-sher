import { Component } from '@angular/core';
import { ReviewAutoCardComponent } from '../../../../components/review-auto-card/review-auto-card.component';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    standalone: true,
    imports: [ReviewAutoCardComponent]
})
export class ReviewsComponent {

}
