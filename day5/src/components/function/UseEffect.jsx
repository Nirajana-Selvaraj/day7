import axios from "axios";
import { useEffect, useState } from "react";
var UseEffect = () => {
  
  var [img,setImg]=useState([]);
  
   useEffect(()=>{
  axios.get("https://dummyjson.com/users").then((ans)=>{console.log(ans.data.users)
    setImg(ans.data.users)
  }).catch((err)=>{
    console.log(err)
  });
   },[])
  return (
    <section>
      <h1>Fetching Images  from Json placeholder api</h1>
      <h2>Images are </h2>
     
      <ol>
        {img.map((users)=>(<li key={users.firstName}>{users.image}</li>))}
      </ol>
    </section>
  );
};
export default UseEffect;