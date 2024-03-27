import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import BookDetailsPage from './pages/BookDetailsPage.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBook from './pages/ReadBook.jsx'
import WishList from './pages/WishList.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('books.json')
      },
      {
        path:'/book/:bookId',
        element:<BookDetailsPage></BookDetailsPage>,
        loader:()=> fetch('books.json')
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/read',
        element:<ReadBook></ReadBook>,
        loader:()=> fetch('books.json')
      },
      {
        path:"/wishlist",
        element:<WishList></WishList>
      },
      {
        path:'/pagetoread',
        element: <PagesToRead></PagesToRead>
      },
      
    ]
  }
 
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)
