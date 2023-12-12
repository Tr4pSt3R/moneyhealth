import React, {useEffect, useState} from "react"

const DisplayStatement = (props) => {
  return (
    <>
      <tr>
        <td>{props.statement.title}</td>
        <td>{props.statement.amount}</td>
      </tr>
    </>
  )
}

export default DisplayStatement
