import React, {useEffect, useState} from "react"
import _ from 'lodash'
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

  const totalIncome = () => {
    return _.sum(statement.incomes.map((income) => income.amount))
  }

  const totalExpenditure = () => {
    return _.sum(statement.expenditures.map((expenditure) => expenditure.amount))
  }

  return (
    <>
      <h2>Income</h2>
      {
        statement['incomes'].map((statement) => <DisplayStatement key={statement.id} statement={statement}/>)
      }

      <h2>Expenditures</h2>
      {
        statement['expenditures'].map((statement) => <DisplayStatement key={statement.id} statement={statement}/>)
      }

      <div data-cy="disposable-income">
        Disposable income: {totalIncome() - totalExpenditure()}
      </div>
    </>
  )
}

export default Statement
