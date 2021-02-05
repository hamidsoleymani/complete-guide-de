import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | undefined;
  @Output() recipeSelected = new EventEmitter();

  onSelect() {
    this.recipeSelected.emit(this.recipe);
  }
}
