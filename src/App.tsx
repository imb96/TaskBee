import { useReducer, useState } from 'react'

import './App.css'
import InputWithButton from './components/InputWithButton'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table'
import { getTime } from './utils/getTime'

interface Todo {
  genDate: string
  genTime: string
  status: string
  content: string
  deadTime: string
}

const initialState: Todo[] = []

function reducer(state: Todo[], action: { type: string; todo: Todo }) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'RESET_TODO':
      return []
    default:
      throw new Error()
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [content, setContent] = useState('')

  const handleClick = () => {
    const newTodo = {
      genDate: getTime().slice(0, 11),
      genTime: getTime().slice(12, 23),
      status: '대기중',
      content: content,
      deadTime: 'N/A',
    }
    dispatch({ type: 'ADD_TODO', todo: newTodo })
  }

  const handleChange = (content: string) => {
    setContent(content)
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="flex w-full max-w-sm items-center justify-center space-x-2">
        <InputWithButton
          placeholder="할 일을 입력하세요!"
          handleChange={handleChange}
          handleClick={handleClick}
        />
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
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{todo.genDate}</TableCell>
                <TableCell className="font-medium">{todo.genTime}</TableCell>
                <TableCell>{todo.status}</TableCell>
                <TableCell>{todo.content}</TableCell>
                <TableCell className="text-right">{todo.deadTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
