import { useState } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

const InputWithButton = ({ ...props }) => {
  const [value, setValue] = useState('')

  return (
    <div className="flex space-x-2">
      <Input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" onClick={() => props.handleClick()}>
        추가
      </Button>
    </div>
  )
}

export default InputWithButton
