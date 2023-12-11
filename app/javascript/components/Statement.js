import React, {useEffect, useState} from "react"
import DisplayStatement from "./DisplayStatement";

const Statement = () => {
  const [statement, setStatement] = useState({ incomes: [], expenditures: []})

  useEffect(() => {
    fetch('/statement')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setStatement(data)
      })
  }, [])

  return (
    <>
      <h2>Income</h2>
      {
        statement['incomes'].map((statement) => <DisplayStatement statement={statement}/>)
      }

      <h2>Expenditures</h2>
      {
        statement['expenditures'].map((statement) => <DisplayStatement statement={statement}/>)
      }
    </>
  )
}

export default Statement
