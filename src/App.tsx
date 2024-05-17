import { atom, useAtom } from 'jotai'

const aaaAtom = atom(0)
const bbbAtom = atom(0)
// const sumAtom = atom((get) => get(aaaAtom) + get(bbbAtom))

function App() {
  // const sumCount = useAtom(sumAtom)
  return (
    <>
      <Aaa />
      <Bbb />
      {/* {sumCount} */}
    </>
  )
}
function Aaa() {
  const [count, setCount] = useAtom(aaaAtom)
  console.log('a重新渲染')
  return (
    <div>
      aaa:{count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

function Bbb() {
  const [count, setCount] = useAtom(bbbAtom)
  console.log('b重新渲染')
  return (
    <div>
      bbb:{count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default App

