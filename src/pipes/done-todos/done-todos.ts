import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../../models/todoModel';
/**
 * Generated class for the DoneTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'doneTodosPipe',
  pure: false
})
export class DoneTodosPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(todos: TodoModel[] ) {
    return todos.filter( todo => todo.isDone );
  }
}
