import { atom, useAtomValue, useSetAtom } from 'jotai'

const countAtom = atom(0)
function App() {
  return (
    <>
      <Aaa />
      <Bbb />
    </>
  )
}
function Aaa() {
  console.log('Aaa重新渲染')
  const count = useAtomValue(countAtom)
  return <div>{count}</div>
}

function Bbb() {
  console.log('Bbb重新渲染')
  const setCount = useSetAtom(countAtom)
  return <button onClick={() => setCount((c) => c + 1)}>+1</button>
}

export default App

