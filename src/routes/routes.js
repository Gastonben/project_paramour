import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';

const Ruth = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}

export default Ruth;