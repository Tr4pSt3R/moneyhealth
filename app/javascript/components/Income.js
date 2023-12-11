import React, {useState} from "react"
import PropTypes from "prop-types"

const Income = (props) => {
  const [incomeDetails, setIncome] = useState({ title: '', amount: 0})
  const [responseDetails, setResponseDetails] = useState( { notification: '', errors: []})

  const handleTitleChange = (event) => {
    event.preventDefault()

    setIncome({...incomeDetails, title: event.target.value})
  }

  const handleAmountChange = (event) => {
    event.preventDefault()

    setIncome({...incomeDetails, amount: event.target.value})
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({ income: incomeDetails })
  }

  const handleIncomeSubmission = (event) => {
    event.preventDefault()

    fetch('/income', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResponseDetails(data)
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      { responseDetails.notification }
      <label>Title</label>
      <input
        value={incomeDetails.title}
        onChange={event => handleTitleChange(event)}
        data-cy='income-title'
      />
      <label>Amount</label>
      <input
        value={incomeDetails.amount}
        onChange={event => handleAmountChange(event)}
        data-cy='income-amount'
      />
      <input type="submit" value="Submit" onClick={event => handleIncomeSubmission(event)}/>
    </>
  )
}

Income.propTypes = {
  title: PropTypes.string
};

export default Income
