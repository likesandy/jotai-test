import { atom, useAtom, useAtomValue } from 'jotai'
import { Suspense } from 'react'

const asyncAtom = atom(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    }, 2000)
  })
})

const countAtom = atom(0)
const request = () => new Promise((r) => setTimeout(r, 2000, 10))

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Aaa />
    </Suspense>
  )
}
function Aaa() {
  // 也可以在改变atom的时候传入promise触发Suspense
  const data = useAtomValue(asyncAtom)
  const [count, setCount] = useAtom(countAtom)
  return (
    <>
      <div>aaa:{data}</div>
      <div>count:{count}</div>
      <button onClick={() => setCount(request)}>+1</button>
    </>
  )
}

export default App
