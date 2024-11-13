import React from 'react'

const DisplayMarks = () => {
    const student =[
        {name:"ayush",roll:2200320130061,m1:75,m2:71,m3:73},
        {name:"ayush sirohi",roll:2200320130065,m1:85,m2:81,m3:93}, 
        {name:"ayush",roll:2200320130061,m1:75,m2:71,m3:73}, 
        {name:"ayush",roll:2200320130061,m1:75,m2:71,m3:73}, 
        {name:"ayush",roll:2200320130061,m1:75,m2:71,m3:73}, 
        {name:"ayush",roll:2200320130061,m1:75,m2:71,m3:73} 
 
    ];
  return (
    <div>
        {student.map((student,index)=>(<Marks key={index} name={student.name} roll={student.roll} m1={student.m1} m2={student.m2} m3={student.m3}/>))}
    </div>
  )
}

export default DisplayMarks