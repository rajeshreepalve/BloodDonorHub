import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import SinglePerson from './SinglePerson'
import Update from './Update'
import { Toaster } from 'react-hot-toast';


const App = () => {
    return (
        <>
        <div>  <Toaster /></div>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                      
                        <Route index element={<Home/>}/>
                    
                       


                        <Route path='/viewall' element={<ViewAll/>}/>
                    
                        <Route path="/singlePerson/:id" element={<SinglePerson/>}/>
                        <Route path="/editperson/:id" element={<Update/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App