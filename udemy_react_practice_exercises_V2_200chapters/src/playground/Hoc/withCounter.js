import React,{useState} from "react";
const UpdatedComponent = (OriginalComponent, increaseCount) => {
    function NewComponent(props) {
        const [counter, setCounter] = useState(10); //create a Hook

        // return <OriginalComponent name = "HOC Concept" />
        return (
            // <OriginalComponent
            //     name = "HOC Concept"            
            //     counter = {counter}
            //     incrementCounter = {() => setCounter(counter + increaseCount)  }
            // />
            <OriginalComponent
            //Pass down all incoming props to the HOC's children:
            {...props}
            counter = {counter}
            incrementCounter = {() => setCounter(counter + increaseCount)  }
          />
         );
    }
    return NewComponent;  
} 
export default UpdatedComponent;