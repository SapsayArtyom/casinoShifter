import './styles/index.scss'
import './index.css'

import { createContext } from 'react'
import { classNames } from './helpers/classNames'
import HomePage from './pages/HomePage/HomePage'
import ProvideGame from './store/provider'
import AppRouter from './components/AppRouter'

function App () {
    return (
        <ProvideGame>
            <div className={classNames('app', {}, ['flex', 'justify-center' ,'items-center', 'flex-col'])}>
                <div className='layout'>
                    {/* <HomePage /> */}
                    <AppRouter />
                </div>
            </div>
        </ProvideGame>
    )
}

export default App;
