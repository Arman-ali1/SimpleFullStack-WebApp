import { useState } from "react";


function Practice(){

    const[flag,SetFlage]=useState(false)
    function bttn(){
        console.log("Button is clicked");
        SetFlage(!flag);
    }

    return (
        <>
            {
                flag?<h1>sahi hai guru:</h1>:<p></p>
            }
            <button onClick={bttn}>SubmitButton</button>
        </>
    )
}
export default Practice;