import { Provider } from 'jotai'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 默认会创建一个store，无需传store
  <Provider>
    <App />
  </Provider>
)

