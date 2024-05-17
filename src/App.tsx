import { atom, useAtom } from 'jotai'

const listAtom = atom([])
const fetchDataAtom = atom(
  (get) => get(listAtom),
  async (get, set, param) => {
    const data = await getListById(param)
    set(listAtom, data)
  }
)

function App() {
  return <Aaa />
}
function Aaa() {
  const [list, fetchData] = useAtom(fetchDataAtom)
  return (
    <div>
      <button onClick={() => fetchData(2)}>加载列表</button>
      <ul>
        {list?.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App

async function getListById(id) {
  const data = {
    1: ['a1', 'a2', 'a3'],
    2: ['b1', 'b2', 'b3', 'b4'],
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[id])
    }, 2000)
  })
}
