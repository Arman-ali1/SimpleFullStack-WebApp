// import { useEffect,useState } from "react";

import axios from "axios";

function ShowUser(){

    async function getUserDetail(){
        try {
            console.log("getdata section");
            await axios.get("http://localhost:8000/userdata")
                .then(res => {
                    // console.log(res);
                    console.log(res.data);
                    // setData(res.data);
                    // console.log(Data[0].name);
                    // nam=Data[0].name
                }).catch(e => {
                    console.log(e);
                });
                
        }
        catch{
            console.log("error");
        }   
    }

    return(
        <>

            <div className="bg-blue-500">
                <h1>Data comming from Database</h1>
                {/* <input onClick={getData} type="submit" value="GET DATA" /> */}
                <button onClick={getUserDetail} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Name</button>
                {/* <h1>`${Data[0].name}`</h1> */}
            </div>

        </>
    )
}
export default ShowUser;