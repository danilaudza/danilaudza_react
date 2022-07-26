import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Main, Links, PageNotFound } from '../../pages/'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/links' element={<Links/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router