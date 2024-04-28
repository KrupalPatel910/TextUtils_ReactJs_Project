import React from 'react'

const Worn = (props) => {
  return (
    props.alert && <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
       <b> {props.alert.type}: </b> {props.alert.msg}    
       
      </div>
  )
}

export default Worn
