import React from 'react'
import './App.css'
const Loading = () => {
    return (
      <>
        <div className="loading">
          <div className="spinner-border" role="status" style={{height:'60px',width:'60px', justifyContent:'center',alignItems:'center',display:'flex'}}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
}

export default Loading
