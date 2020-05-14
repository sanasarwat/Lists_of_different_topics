import  { useState } from 'react' //react import nahi karwana

function CustomHook() { //this is not a compnent its is hook.
    const [count, setcount] = useState(0)
    const countHnadler = () =>{
        setcount(count+1)
    };

    return {
          
           count,
           countHnadler
};
    
    
}

export default CustomHook
