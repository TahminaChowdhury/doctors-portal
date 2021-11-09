import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth'



const Appointments = ({date}) => {
    const {user} = useAuth();
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [date])

    return (
        <div>
            <h2>Apoointments: {appointment.length}</h2>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Schedule</TableCell>
                    <TableCell align="right">Service</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {appointment.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.patientName}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.serviceName}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </div>
    );
};

export default Appointments;