import React,{useState} from 'react'
import '../style.css'
import MainQuiz from './MainQuiz'
function Show(props) {
  const[marks,setMarks]=useState("quiz not attempt");
  const[Toggled,setToggled]=useState(true);
  const change=(m)=>{
    setMarks(m);
    setToggled(false);
  }
  return (
    <>
              <tr>
                  <td>{props.info.name}</td>
                  <td>{props.info.gmail}</td>
                  <td>{props.info.id}</td>
                  <td>{marks}</td>
              </tr>
              {Toggled==true &&
              <MainQuiz fun={change}/>}
              </>
  )
}
export default Show;