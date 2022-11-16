import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import routes from '~react-pages'

const Router = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const App = () => {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}

export default App
