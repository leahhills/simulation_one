import React from 'react'
import './Header.css'
import logo from './../assets/logo.png'
import {Link} from 'react-router-dom';

export default function Header(props) {
  let path = (window.location.pathname).split('/');
  let shelf = path.length ? path.includes('bins') ? path[path.length-1] : Math.ceil((path[path.length-1]*1)/5) : ''
  console.log(path);

  let bin =  path[1] === 'bin' ? path[path.length-1] : ''

  return (
   
        
        
        <div className="header">
          
         
            <div>

              <Link to= "/">
                <img src={logo} className="pic"/>
                
              </Link>
            </div>
       

              <h1 className="title">SHELFIE</h1>
              { path.length > 2 ? 

              <Link to={`/bins/${shelf}`} style={{textDecoration:'none', color:"white"}}>
              <div className="shelfname">
                <h1>{'Shelf '+ shelf}</h1>
              </div> 
              </Link>
              : null
              
              }

              { bin.length ? 
              <div className = "binname">
                  <h1>{'bin ' + (bin > 5 ? bin > 10 ? bin > 15 ? bin - 15 : bin - 10 : bin - 5 : bin) }</h1>
              </div>:
              null
              }

        
        </div>
    


     
    
    )
  }
  


