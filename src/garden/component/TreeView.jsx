import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getDeptData } from '../service/dbLogic';
import { useDispatch } from 'react-redux';
import gardenSlice from '../../common/service/gardenSlice';
import styles from '../css/garden.module.css'

const EmpBlock = styled.li`
list-style-type: none;
border: 1px solid blue;
padding: 5px;
border-radius: 8px;
margin: 5px;  
background-color: ${({ isSelected }) => (isSelected ? '#a0a0e5' : '#d4d4f7')};
cursor: pointer;
`;

const Employee = ({ empData, onEmpClick }) => (
<ul>
  {empData.map((emp, index) => (
    <EmpBlock
      key={index}
      isSelected={emp.isSelected}
      onClick={() => onEmpClick(index)}
    >
      {emp.emp_name} {emp.lev}
    </EmpBlock>
  ))}
</ul>
);

const Department = ({ deptData, onEmpClick }) => {
  const [onOff, setOnOff] = useState(false);

  const handleToggle = () => {
    setOnOff((prev) => !prev);
  };

  return (
    <div>
      <>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={onOff}
          onClick={handleToggle}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {deptData.dept_name}
        </label>
        {onOff === true ? (
          <Employee empData={deptData.emp} onEmpClick={onEmpClick} />
        ) : null}
      </>
    </div>
  );
  };

const TreeView = () => {

  const [deptData, setDeptData] = useState([]);
  const [empData, setEmpData] = useState({
    emp_id:'',
    emp_name:'',
    lev:'',
    emp_type:'',
  });
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await getDeptData();
    setDeptData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEmpClick = (deptIndex, empIndex) => {
    const updatedDeptData = [...deptData];
    updatedDeptData.forEach((dept) =>
      dept.emp.forEach((emp) => (emp.isSelected = false))
    );
    updatedDeptData[deptIndex].emp[empIndex].isSelected = true;
    setDeptData(updatedDeptData);
    console.log("바뀐 값: "+deptData);
    setEmpData({...updatedDeptData[deptIndex].emp[empIndex]});
    dispatch(gardenSlice.actions.setEmp({...updatedDeptData[deptIndex].emp[empIndex]}));
  };

  return (

    <>
      <h1>조직도</h1>
      <div className={styles.department}>
        {deptData.map((dept, index) => (
          <Department
            key={index}
            deptData={dept}
            onEmpClick={(empIndex) => handleEmpClick(index, empIndex)}
          />
        ))}
      </div>
    </>
  );
};

export default TreeView;

// const EmpBlock = styled.li`
//   list-style-type: none;
//   border: 1px solid blue;
//   border-radius: 8px;
//   margin: 5px;  
//   background-color: ${({ isSelected }) => (isSelected ? '#a0a0e5' : '#d4d4f7')};
//   cursor: pointer;
// `;

// const Employee = ({ empData }) => {
//   const [selectedEmp, setSelectedEmp] = useState(null);

//   const handleEmpClick = (index) => {
//     setSelectedEmp((prevSelected) => (prevSelected === index ? null : index));
//   };

//   return (
//     <ul>
//       {empData.map((emp, index) => (
//         <EmpBlock
//           key={index}
//           isSelected={selectedEmp === index}
//           onClick={() => handleEmpClick(index)}
//         >
//           {emp.emp_name} {emp.lev}
//         </EmpBlock>
//       ))}
//     </ul>
//   );
// };

// const Department = ({deptData})=>{
//   const [onOff, setOnOff] = useState(false);

//   const handleToggle = () =>{
//     setOnOff((prev) =>!prev)
//   }
//   return(
//   <div> 
//       <>
//       <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={onOff} onClick={handleToggle}/>
//       <label className="form-check-label" for="flexCheckDefault">{deptData.dept_name}</label>
//       {onOff === true ? <Employee empData={deptData.emp}></Employee> : null}
//       </>
//   </div>
//   )
// }

// const TreeView = () => {
//   const [deptData, setDeptData] = useState([]);

//   const getData = async () =>{
//     const response = await getDeptData();
//     setDeptData(response.data);
//   }
//   useEffect(()=>{
//     getData();
//   },[])
//   console.log(deptData);

//   return (
//     <div>
//       <h1>조직도</h1>
//       {deptData.map((Dept, index)=>(
//         <Department key={index} deptData={Dept}></Department>
//       ))}
//     </div>
//   )
// }

// export default TreeView