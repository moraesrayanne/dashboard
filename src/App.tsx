import { Button } from './components/button/button'
import { Input } from './components/input/input'

export const App = () => {
  const onClick = () => {
    console.log('clicou')
  }

  return (
    <div className='flex flex-col'>
      <Button onClick={onClick}>Continuar</Button>
      <Input label="E-mail" />
    </div>
  )
}
