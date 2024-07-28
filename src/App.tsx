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

function App() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="flex w-full max-w-sm items-center justify-center space-x-2">
        <InputWithButton
          placeholder="할 일을 입력하세요!"
          handleClick={() => {
            console.log('Button clicked')
          }}
        />
      </div>
      <div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">생성시간</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>내용</TableHead>
              <TableHead className="text-right">마감시간</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">15:17</TableCell>
              <TableCell>진행중</TableCell>
              <TableCell>신용카드 신청하기</TableCell>
              <TableCell className="text-right">19:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
