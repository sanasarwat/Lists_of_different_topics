import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import StrictMode from './StrictMode'
import List from './components/list_items/List'






class App extends Component{
    
  render(){
     

    return(
      <div className='App'>
     {/* //childeren props */}
     {/* <RenderCount>
     {(count,clickCount)=><CountTwo count={count} clickCount={clickCount}/>}
     </RenderCount>
    
     <RenderCount>
     {(count,clickCount)=><HoverCount count={count} clickCount={clickCount}/>}
     </RenderCount> */}
     {/* <RenderCount render={(count,clickCount)=><HoverCount count={count} clickCount={clickCount}/>} />
     <RenderCount render={(count,clickCount)=><CountTwo count={count} clickCount={clickCount}/>} /> */}


     {/* <DestructingProps name='sana sarwat' heroname='abc' />
     <Greet name='sana sarwat' heroname='abc'/> */}

      <React.StrictMode>
          
      <StrictMode />
      </React.StrictMode>
      <List />
        
      </div>  
    );
  }
 
}

export default App;
