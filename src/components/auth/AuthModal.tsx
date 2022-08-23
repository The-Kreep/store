import { atom } from 'nanostores'
import { FunctionComponent } from 'preact'

const AuthModal: FunctionComponent = () => {
  const authModalState = atom<'visible' | 'hidden'>('hidden')

  return (
    <div>
      <h1>Auth Modal</h1>
    </div>
  )
}

export default AuthModal
