import { useEffect,useState } from "react";
import  axios  from "axios";


function Home() {
    
const [name,setName]=useState('')
const [Data,setData]=useState(["arman","ali"])
let nam;

async function submit(e){
    e.preventDefault()
    try{
        await axios.post("http://localhost:8000/sendData",{
            name
        }).then(res=>{
            // console.log(res.data)
            // console.log(res.data[0].name);
            // setData(res.data)
            
            // console.log(Data[0].name);
        }).catch(e=>{
            console.log(e);
        })
    }
    catch{
        console.log(e);
    }
}
async function getData(){
    try {
        console.log("getdata section");
        await axios.get("http://localhost:8000/getdata")
            .then(res => {
                console.log(res.data);
                setData(res.data);
                // console.log(Data[0].name);
                nam=Data[0].name
            }).catch(e => {
                console.log(e);
            });
            
    }
    catch{
        console.log("error");
    }
    
  
}
const change=(event)=>{
    setName(event.target.value)
};
// console.log(Data[0].name);
// useEffect(() => {
//     // Add your code here
//     console.log(Data[0].name);
// }, [Data]);
    return(
        <>
            <div className="bg-blue-500">
                <h1>write your name here</h1>
                <form onSubmit={submit}>
                <input onChange={change} type="text"   /><br></br><br></br>
                    {/* <input type="submit" /> */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit name</button>
                </form>
                <h1>Data comming from Database</h1>
                {/* <input onClick={getData} type="submit" value="GET DATA" /> */}
                <button onClick={getData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Name</button>
                <h1>`${Data[0].name}`</h1>
            </div>
        </>
    )
}
export default Home;