import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom'
import { Layout } from './layout'
import { Home } from './home'
import { Quiz } from './quiz'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='quiz' element={<Quiz />} />
    </Route>,
  ),
)

export function App () {
  return (
    <RouterProvider router={router} />
  )
}
