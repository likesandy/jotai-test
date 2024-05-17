import { atom, useAtom, useAtomValue } from 'jotai'
import { focusAtom } from 'jotai-optics'

const objAtom = atom({
  count: 0,
  text: 'bbb',
})
const textAtom = focusAtom(objAtom, (optic) => optic.prop('text'))

function App() {
  return (
    <>
      <Aaa />
      <Bbb />
    </>
  )
}
function Aaa() {
  const [obj, setCount] = useAtom(objAtom)
  console.log('Aaa重新渲染')
  return (
    <div>
      aaa:{obj.count}
      <button
        onClick={() =>
          setCount((pre) => ({
            ...pre,
            count: pre.count + 1,
          }))
        }
      >
        +1
      </button>
    </div>
  )
}

function Bbb() {
  const text = useAtomValue(textAtom)
  console.log('b重新渲染')
  return <div>bbb:{text}</div>
}

export default App
