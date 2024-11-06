import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';

export const UserRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path='/*' element={<Navigate to="/home" />} />
        </Routes>
    )
}