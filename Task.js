import React from 'react'

function Task() {
  return (
    <div>


        1- What is the correct command to create a new React project?

        {/* 1- npx create-react-app myREactApp */}
        2- npm create-react-app myreactapp
        3- npm create-react-app 
        4- npx create-react-app myreactApp
        5- npx create-react-app 



        2- What command is used to start the React local development server?


        {/* 1- npm start  */}
        2- npm serve 
        3- npm build 
        4- npm run dev 


        3- What is the default local host port that a React development server uses?

        {/* 1- 3000  */}
        2- 5000
        3- 8080 
        4- 3500



        4- To develop and run React code, Node.js is required.

        {/* 1- true  */}
        2- false



        5- Which keyword creates a constant in JavaScript?


        1- let 
        2- var 
        {/* 3- const  */}
        4- constant


        6- React component names must begin with an uppercase letter

        {/* 1- true  */}
        2- false 


        7- What is the correct syntax to import a Component from React?

        {/* 1- import Component from 'react' */}
        2- import React.Component from 'react'
        3- import {Component} from 'react'
        4- import [Component] from 'react'


        8- what is a props in react js , give me example (code) ?
        (To share state between the components...........props is likely to be attribute)
        EXAMPLE:-
          In App.js
              import React from 'react'
              import About from './About'
              function App() {
                return (
                  <div>
                    <About  username="Yasmin" age="14" job="Frontend Developer"/>
                  </div>
                )
              }
              export default App
          
          In About.jsx
              import React from 'react'
              function About(props) {
                return (
                  <div>
                      <h2>About</h2>
                      <h1>Username:- {props.username}</h1>
                      <h1>Age:- {props.age}</h1>
                      <h1>Job:- {props.job}</h1>
                  </div>
                )
              }
              export default About

        9- what is a state in react js , give me example (code) ?
        state=data
        state is likely to be object
        setState=Update
        to use state you need Hooks (context API) & Redux (state management)
        EXAMPLE:

        import React , {useState} from 'react'
        function State() {

            const [count, setCount]=useState(0)

            const[text,setText]=useState("Mariam")

          return (
            <div>
                <h1>{text}</h1>
                <button onClick={()=> setText ("Youssef")}>Change</button>

                <h1> {count}</h1>
                <button onClick={()=>setCount(count + 1)}>+</button>
                <button onClick={()=>setCount(count - 1)}>-</button>
            </div>
          )
        }
        export default State


        10- what is a (spa) ?
        SPA stands for single page application
        one page contains components




    </div>
  )
}

export default Task