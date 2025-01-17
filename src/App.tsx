import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useTodoStore } from '@/stores/todoStore'

import './App.css'
import InputWithButton from './components/InputWithButton'
import TodoItem from './components/TodoItem'
import { Button } from './components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table'
import { getFormattedDate } from './utils/getFormattedDate.ts'

function App() {
  const { todos, addTodo, resetTodos, updateTodo, deleteTodo } = useTodoStore()
  const [content, setContent] = useState('')

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="flex w-full max-w-sm items-center justify-center space-x-2">
        <InputWithButton
          placeholder="할 일을 입력하세요!"
          handleChange={(t: string) => setContent(t)}
          handleClick={() => {
            const newTodo = {
              genDate: getFormattedDate().formatDate,
              genTime: getFormattedDate().formatTime,
              status: '대기중',
              content: content,
              deadTime: 'N/A',
            }
            addTodo(newTodo)
            setContent('')
          }}
        />

        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">초기화</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                업무일정을 초기화 하시겠습니까?
              </AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction onClick={resetTodos}>초기화</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>생성날짜</TableHead>
              <TableHead>생성시간</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>내용</TableHead>
              <TableHead className="text-right">마감시간</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
