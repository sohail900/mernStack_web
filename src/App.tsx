import { FC, ReactElement, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from './component/loader/loader'
const Hero = lazy(() => import('./component/hero/hero'))
const App: FC = (): ReactElement => {
    return (
        <>
            <main>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <div>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path='/home' element={<Hero />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </>
    )
}
export default App
