import * as React from 'react'
import background from "/src/images/lucas.jpeg";

const Lucas = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height:"700px"}}>
            <h2>Hello, World!</h2>
        </div>
      );
  }
  
  export default Lucas