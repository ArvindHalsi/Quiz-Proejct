import {useState,useCallback } from "react";
import Show from "./show";
function StudentLogin() {
    const[name,setName]=useState("");
    const[gmail,setGmail]=useState("");
    const[id,setId]=useState("");
    const[arr,setData]=useState([]);
    const data=[190030101001,190030101002,190030101003,190030101004,190030101005,190030101006,190030101007];
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name==""||gmail==""||id==""){
            alert("All field Required!!!")
        }else{
            var flag=false;
            for(let i=0;i<data.length;i++){
                if(id==data[i]){
                    flag=true
                    break;
                }
            }
            if(flag==false){
                alert("you are not eligible to take part in quiz")
            }
            else{
                for(let i=0;i<arr.length;i++){
                    if(id==arr[i].id){
                        flag=false;
                        alert("you already submit your test");
                        break;
                    }
                }
            }
            if(flag==true){
            const obj={name,gmail,id};
            const items=[...arr,obj];
            setData(items);
            setName("");
            setId("");
            setGmail("");
            }
        }
    }
    //const sorting=()=>{
        //for(let i=0;i<arr.length;i++){
          //  for(let j=i+1;j<arr.length;j++){
            //    if(arr[i].)
            //}
       // }
    //s}
  return (
      <>
      <h1>Quiz Competition</h1>
      <form onSubmit={handleSubmit}>
          <div>
              <input type="text" placeholder="enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
          </div>
          <div>
          <input type="text" placeholder="enter your gmail" value={gmail} onChange={(e)=>{setGmail(e.target.value)}} ></input>
          </div>
          <div>
          <input type="text" placeholder="enter your Id" value={id} onChange={(e)=>{setId(e.target.value)}} ></input>
          </div>
          <div>
              <button>submit</button>
          </div>
      </form>
      <hr></hr>
      <table className="content-table">
          <thead>
          <tr>
              <th> Name</th>
              <th>Gmail Id</th>
              <th>Collage ID</th>
              <th>marks Obtained</th>
          </tr>
          </thead>
          <tbody>
      {arr.map((value)=>{
          return <Show info={value}/>
      })}
      </tbody>
      </table>
      </>
  )
}
export default StudentLogin;