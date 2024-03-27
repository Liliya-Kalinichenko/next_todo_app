import { Status } from "@/app/types/FilterStatus";
import { Todo } from "@/app/types/Todo";

export const filterTodos = (todos: Todo[], fitlerParam: Status) => {
  switch (fitlerParam) {
    case Status.Active:
      return todos.filter(todo => !todo.isCompleted);
    case Status.Completed:
      return todos.filter(todo => todo.isCompleted);
    default:
      return todos;
  }
};
