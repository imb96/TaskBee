// src/components/TodoItem.tsx
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TableCell, TableRow } from '@/components/ui/table'
import { Todo } from '@/types/todo'

interface TodoItemProps {
  todo: Todo
  onUpdate: (id: string, updatedTodo: Partial<Omit<Todo, 'id'>>) => void
  onDelete: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(todo.content)

  const handleUpdate = () => {
    onUpdate(todo.id, { content: editedContent })
    setIsEditing(false)
  }

  return (
    <TableRow>
      <TableCell className="font-medium">{todo.genDate}</TableCell>
      <TableCell className="font-medium">{todo.genTime}</TableCell>
      <TableCell>{todo.status}</TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          todo.content
        )}
      </TableCell>
      <TableCell className="text-right">{todo.deadTime}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <Button onClick={handleUpdate}>저장</Button>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              수정
            </Button>
          )}

          <Button variant="destructive" onClick={() => onDelete(todo.id)}>
            삭제
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default TodoItem
