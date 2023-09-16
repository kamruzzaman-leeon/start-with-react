import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {



  return (
    <>
      <h1>list of item</h1>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
    
    <Todo task="react"></Todo>
     
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device name="Laptop" price="55"></Device>
      <Student grade='4' mark='100'></Student>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name:'sakib',age:12}
  return <h3>I am {person.name} a person with age: {age + money}</h3>
}

// function Student(){
//   return(
//     <div className="student">
//       <h3>This is a student</h3>
//       <p>Name:</p>
//       <p>Age:</p>
//     </div>
//   )
// }

const {grade,mark} = {grade:'7', mark: '99'}
function Student({grade=0,mark=1} ){
  return(
    <div className="student">
      <h3>This is a student</h3>
      <p>grade:{grade}</p>
      <p>mark:{mark}</p>
    </div>
  )
}

function Developer(){
  const developerStyle={
    magin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius:'20px'
  }
  return(
    <div style={developerStyle}>
      <h3>Developer</h3>
      <p>Coding</p>
    </div>
  )
}

function Device(props){
  return (
    <h2>This device:{props.name} : {props.price}</h2>
   
  )
}

export default App
