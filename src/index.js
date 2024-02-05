import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'
import UserProfile from './pages/UserProfile'
import Order from './pages/Order'
import NewArticle from './pages/NewArticle'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Landing />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'profile/edit',
				element: <Register />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'articles',
				element: <Articles />,
			},
			{
				path: 'articles/:articleId',
				element: <SingleArticle />,
			},
			{
				path: 'profile',
				element: <UserProfile />,
			},
			{
				path: 'orders/:orderId',
				element: <Order />,
			},
			{
				path: 'cart',
				element: <Order cart />,
			},
			{
				path: 'new_article',
				element: <NewArticle />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
