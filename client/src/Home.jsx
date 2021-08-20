import React,{useState} from "react"
import './App.css'
import Nav from './Navbar'
import Tables from './components/Table';
import TableSelection from "./components/TabelSelection";
import SearchBar from './components/SearchBar';

// SSEARCH BAR
import './components/Style/SearchBar.css'

const Home = ({history}) =>{

const [name,setName] = useState('NIFTY')
  console.log("...... => => ",name)
  
  return(
    <>
    <Nav/>
      {/* search bar implementationk */}
      <div  className="SearchBar">
      <SearchBar  name={name} setName={setName} />
    </div>
    <TableSelection/>
  
    <div className="tablesCSS">     
      <Tables history={history} name={name}/>
    </div>
    
    
    </>
  )
}

export default Home