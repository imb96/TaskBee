import { useRef } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

interface InputWithButtonProps {
  placeholder?: string
  handleChange: (content: string) => void
  handleClick: () => void
}

const InputWithButton: React.FC<InputWithButtonProps> = ({ ...props }) => {
  const { handleChange, handleClick, placeholder } = props
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button
        type="submit"
        onClick={() => {
          if (inputRef.current) {
            if (inputRef.current.value === '') return
            handleClick()
            inputRef.current.value = ''
          }
        }}
      >
        추가
      </Button>
    </form>
  )
}

export default InputWithButton
