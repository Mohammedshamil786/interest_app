import './App.css';
import {TextField,Stack} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [total,SetTotal]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)

  const [validPrinciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !time){
      alert("Enter valid value")
    }
    else{
      let a=principle*rate/100*time
      SetTotal(a)
    }
  }

  function handleReset(){
    setPrinciple(0)
    setRate(0)
    setTime(0)
    SetTotal(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)
  }

  const validateInput=(e)=>{
    const {name,value}=e.target
    console.log(!!value.match((/^[0-9]{1,}$/)))
    if(!!value.match(/^[0-9]{1,}$/)){
      if(name==='principle'){
       setPrinciple(value)
       setValidPrinciple(true)
      }
      

      else if(name==='rate'){
        setRate(value)
        setValidRate(true)
      }

      else{
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name==='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }

      else if(name==='rate'){
        setRate(value)
        setValidRate(false)
      }

      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
  
  // console.log(principle,rate,time)


  return (
    
    <div style={{height:'100vh'}} className=" w-100 d-flex justify-content-center align-items-center bg-dark">
      <div className='bg-light p-5 rounded'>
       <h1>Simple Interest Calculator </h1>
       <p>calculate your simple interest easily</p>
       <div style={{backgroundColor:'#ffff00'}} className='text-center rounded'>
        <h4 className='pt-3'>₹ {' '} {total}</h4>
        <p className='pb-3'>Your total interest</p>
       </div>
       <form className="my-5" onSubmit={(event)=>handleSubmit(event)}>
       <div className='mb-3'>
           <TextField id="outlined-basic1"  className='w-100' label="₹ Principle amount" variant="outlined"
           value={principle || ''}name='principle' onChange={(event)=>validateInput(event)}/>
           {
            !validPrinciple &&
            <div className='text-danger'>
              Invalid principle amount value
            </div>
           }
       </div>

       <div className='mb-3'>
          <TextField id="outlined-basic2"  className='w-100' label="Rate of interest (p.a) %" variant="outlined"
          value={rate || ''}name='rate' onChange={(event)=>validateInput(event)}/>
          {
            !validRate &&
            <div className='text-danger'>
              Invalid principle amount value
            </div>
          }
          </div>
        <div className='mb-3'>
          <TextField id="outlined-basic3" className='w-100'  label="TIme period (yr)" variant="outlined"
          value={time || ''}name='time' onChange={(event)=>validateInput(event)}/>
          {
            !validTime &&
            <div className='text-danger'>
              Invalid principle amount value
            </div>
          }
        </div>
        <Stack spacing={2} direction={'row'}>
          <Button type='submit' style={{height:'50px',width:'250px'}} disabled={validPrinciple && validRate && validTime ? false:true} variant="contained" className='bg-dark'>CALCULATE</Button>
          <Button onClick={handleReset} style={{height:'50px',width:'250px'}} variant="outlined">RESET</Button>

        </Stack>
        </form>

  {/* <div className='d-flex justify-content-center mt-4'>
    <Button className='bg-dark py-2 px-5 me-2'variant="contained">CALCULATE</Button>
    <Button className=' text-primary border-dark py-2 px-5 ms-2 ' variant="outlined">RESET</Button>
 </div> */}
       
   </div>
      
    </div>
  );
}

export default App;