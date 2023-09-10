export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface GridProps {
  todoList: Todo[];
  regNumber: number;
}

export interface GridItemProps {
  todo: Todo;
}

export interface ChuckNorris {
  icon_url: string;
  url: string;
  value: string;
}

export interface NewGridProps {
  joke: ChuckNorris;
}
