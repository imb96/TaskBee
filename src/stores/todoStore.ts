// src/store/todoStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Todo } from '@/types/todo'

type TodoStore = {
  todos: Todo[]
  addTodo: (todo: Omit<Todo, 'id'>) => void
  resetTodos: () => void
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) =>
        set((state) => ({
          todos: [...state.todos, { ...todo, id: Date.now().toString() }],
        })),
      resetTodos: () => set({ todos: [] }),
    }),
    {
      name: 'todo-storage',
    },
  ),
)
