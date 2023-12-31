import React, {useContext, useEffect, useState} from "react"
import _ from 'lodash'
import DisplayStatement from "./DisplayStatement";
import {Table, Typography} from "@mui/joy";

const Statement = ({ statement }) => {
  const totalIncome = () => {
    return _.sum(statement.incomes.map((income) => income.amount))
  }

  const totalExpenditure = () => {
    return _.sum(statement.expenditures.map((expenditure) => expenditure.amount))
  }

  const ratingRatio = () => {
    return totalExpenditure() / totalIncome()
  }

  const ratingGrade = () => {
    let ratio = ratingRatio()
    let grade;

    if(_.inRange(ratio, 0.0, 0.1)) {
      grade = 'A';
    }

    if(_.inRange(ratio, 0.1, 0.3)) {
      grade = 'B';
    }

    if(_.inRange(ratio, 0.3, 0.5)) {
       grade = 'C';
    }

    if(_.gt(ratio, 0.5)) {
      grade = 'D';
    }

    return grade
  }

  const disposableIncome = () => {
    return totalIncome() - totalExpenditure()
  }

  return (
    <>
      <Typography level="h3" component="h3">
        Income
      </Typography>
      <Table>
        <tbody>
          {
            statement['incomes'].map((statement) => <DisplayStatement key={statement.id} statement={statement}/>)
          }
        </tbody>
      </Table>

      <Typography level="h3" component="h3">
        Expenditure
      </Typography>
      <Table>
        <tbody>
          {
            statement['expenditures'].map((statement) => <DisplayStatement key={statement.id} statement={statement}/>)
          }
        </tbody>
      </Table>

      <div data-cy="disposable-income">
        Disposable income: { disposableIncome() }
      </div>

      <div data-cy="rating">
        Rating: { ratingGrade() }
      </div>
    </>
  )
}

export default Statement
