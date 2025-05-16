import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'

const root = document.getElementById('root')

if (!root) {
  throw new Error('[오류] root element를 찾을 수 없습니다.')
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

