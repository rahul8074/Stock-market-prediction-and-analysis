import React,{useState} from "react"
import './App.css'
import Nav from './Navbar'
import Tables from './components/Table';
import TableSelection from "./components/TabelSelection";
import SearchBar from './components/SearchBar';
// SSEARCH BAR
import './components/Style/SearchBar.css'

const Stock = ({history}) =>{

const [name,setName] = useState('')

const [historical,setHistorical]=useState(false)



  console.log("...... => => ",window.location.pathname.split('/').slice(-1)[0])
  
  return(
     name=="" ? 
      <div  className="SearchBar">
      <SearchBar  name={name} setName={setName} />
    </div>
    : 
    <>
      <div  className="SearchBar">
      <SearchBar  name={name} setName={setName} />

    </div>

    <div style={{display:'flex',flexDirection:"column",overflowX:"auto"}}> 
      
    <TableSelection/>    
    </div>
  
     
    <div className="tablesCSS"> 
      <Tables history={history} name={name}/>
    </div>

    </>
  )
}

export default Stock