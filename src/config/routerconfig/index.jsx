import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../../pages/home'
import Aboutpage from '../../pages/about'
import Brandpage from '../../pages/brand'
import Contactpage from '../../pages/contact'
import Uslugpage from '../../pages/uslug'
import Mastercallpage from '../../pages/mastercall'
export default function routerconfig() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Homepage/>}></Route>
     <Route path="/about" element={<Aboutpage/>}></Route>
     <Route path="/brand" element={<Brandpage/>}></Route>
     <Route path="/contact" element={<Contactpage/>}></Route>
     <Route path="/uslug" element={<Uslugpage/>}></Route>
     <Route path="/mastercall" element={<Mastercallpage/>}></Route>
    </Routes>
    </>
  )
}
