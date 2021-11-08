import {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth'
const Appointments = () => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => {
        
        })
    }, [])
    return (
        <div>
            <h1>Appointments</h1>
        </div>
    );
};

export default Appointments;