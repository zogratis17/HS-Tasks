
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx' 
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import TaskList from './pages/TaskList.jsx'
import Layout from './components/Layout.jsx'


const App = () => {
  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout />} >
          
            <Route index element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
            <Route path='/tasklist' element={<TaskList />} />
            </Route>
        </Routes>
      </BrowserRouter>


      {/* <div className='header'>

        <Header />
        <br></br>
      </div>
      <div className='page'>
        <Home/>

      </div> */}
      
      
    </>
    
    
  )
}

export default App
