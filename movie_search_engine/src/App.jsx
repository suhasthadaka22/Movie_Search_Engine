import './App.css'

function App() {
  return (
    <>
      <Text display="First React Project!"/>
      <div>
        <p>Hello React</p>
      </div>
     </>  
  )
}

function Text({display}){
  return (
      <div>
        <h1>{display}</h1>
      </div>
  );
}

export default App
