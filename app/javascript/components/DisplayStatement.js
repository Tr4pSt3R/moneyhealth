import React, {useEffect, useState} from "react"

const DisplayStatement = (props) => {
  return (
    <>
      {
        <div key={props.statement.id}>
          <span>{props.statement.title}</span>
          <span>{props.statement.amount}</span>
        </div>
      }
    </>
  )
}

export default DisplayStatement
