import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../../models/todoModel';
/**
 * Generated class for the PrioritizedTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'prioritizedTodosPipe',
  pure: false
})
export class PrioritizedTodosPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(todos: TodoModel[]) {
    return todos.filter( todo => !todo.isDone ).sort( (a, b) => (b.isImportant && !a.isImportant) ? 1 : -1 );
  }
}
