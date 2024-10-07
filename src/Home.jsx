import React,{useState} from 'react'

function Home() {

  const [bmiValue,setBmiValue]=useState("")

  let height=0
  let weight=0

  const getheight=(evnt)=>{
    height=evnt.target.value
    console.log(height)
  }

  const getweight=(val)=>{
    weight=val
    console.log(weight)
  }

  const calculate=()=>{
    const result=weight/(height**2)
    console.log(result)
    
    if(result<18.5){
      setBmiValue("Underweight")
    }
    else if(result>=18.5 && result<=24.9){
      setBmiValue("Normal")
    }
    else if(result>=25.0 && result<=29.9){
      setBmiValue("Over Weight")
    }
    else if(result>=30.0){
      setBmiValue("Obesity")
    }
  }
  
  

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-50 border shadow p-5'>
            <h3>Calculator</h3>
            <input type="text" className='form-control my-4' onChange={(e)=>{getheight(e)}} placeholder='Ente your height in meter' />
            <input type="text" className='form-control mb-4' onChange={(e)=>{getweight(e.target.value)}} placeholder='Ente your weight in kilograms' />
            <button className='btn btn-success' onClick={()=>{calculate()}}>Submit</button>
            <div className='mt-3'>
              <h3>{bmiValue}</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home