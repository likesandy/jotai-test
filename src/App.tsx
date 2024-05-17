import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// localStorage key
const countAtom = atomWithStorage('count-key', 0)
function App() {
  const [count, setCount] = useAtom(countAtom)
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}

export default App
