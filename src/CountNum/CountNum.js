import { useState } from "react"
import IncNum from "./IncNum";
import DecNum from "./DecNum";

export default function CountNum(){
    
    const [count,setCount] = useState(0);

    return(
        <>
            <div>숫자 증가 감소</div>
            <div>{count}</div>
            <IncNum setCount={setCount} count={count}></IncNum>
            <DecNum setCount={setCount} count={count}/>
        </>
    )
}