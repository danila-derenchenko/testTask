
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store} >
      <BrowserRouter basename={"https://danila-derenchenko.github.io/testtask/"}>
        <App />
      </BrowserRouter>
    </Provider>
  ,
)
