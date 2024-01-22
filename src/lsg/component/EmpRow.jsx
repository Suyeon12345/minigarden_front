import React from 'react';
import { Link } from 'react-router-dom';

const EmpRow = ({emp}) => {
    console.log(emp);
    return (
        <>
            <tr>
                <td>{emp.e_code}</td>
                <td>
                    <Link to={"/emp/"+emp.e_code} style={{ textDecoration: 'none', color: 'black'}}>{emp.e_name}</Link>
                </td>
                <td>{emp.e_gender}</td>
                <td>{emp.e_phone}</td>
            </tr>
        </>
    )
}

export default EmpRow