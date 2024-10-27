import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';

export const UserRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}