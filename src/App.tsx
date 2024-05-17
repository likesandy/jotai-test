import { atom, useAtom, useStore } from 'jotai'

const aaaAtom = atom(0)
const bbbAtom = atom(0)
// 派生原子；基于其他原子定义状态
// const sumAtom = atom((get) => get(aaaAtom) + get(bbbAtom))

function App() {
  // 获取atom状态
  // 虽然store.get(xx)也可以获取
  // 但是这个hook会自动订阅，当状态变化时组件会重新渲染
  // const sumCount = useAtom(sumAtom)

  // useAtom = [useAtomValue,useSetAtom]
  useStore().sub(aaaAtom, () => {
    console.log('aaaAtom变化了')
  })
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
