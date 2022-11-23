import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from '../components/Counter';
import From from '../components/form/From';
import FormHook from '../components/reactHookForm/formHook';
import Layout from '../layout/layout';
import { RouterTwo } from '../components/RouterTwo';
import { RouterOne } from '../components/RouterOne';

const AppRoutes = () => {
    
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<FormHook/>}/>
                <Route path='/myform' element={<From/>}/>
                <Route path='/counter' element={<Counter/>} />
                <Route path='/routertwo' element={<RouterTwo/>} />
                <Route path='/routerone' element={<RouterOne/>} />

            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes