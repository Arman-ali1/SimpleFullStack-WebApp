import React from "react";
import exampleImage from "../../public/th.png"

function HomePage(){
    return(
        <>

            <h1 className="text-4xl font-bold text-blue-700 text-center bg-red-200 py-6">Welcome to CoderSquade</h1>
            <br></br>
            <div className="flex items-center justify-center rounded-lg">
            coding world <img src={exampleImage} alt="Example" className="filter blur-2xl " /><br></br>coding world
            </div>
            
        </>
    )
}
export default HomePage;