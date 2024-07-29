// src/store/todoStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Todo } from '@/types/todo'

type TodoStore = {
  todos: Todo[]
  addTodo: (todo: Omit<Todo, 'id'>) => void
  updateTodo: (id: string, updatedTodo: Todo) => void
  deleteTodo: (id: string) => void
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
      updateTodo: (id, updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...updatedTodo } : todo,
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      resetTodos: () => set({ todos: [] }),
    }),
    {
      name: 'todo-storage',
    },
  ),
)
