import React, {useState} from "react"

const Expenditure = () => {
  const [expenditureDetails, setExpenditure] = useState({ title: '', amount: 0})
  const [responseDetails, setResponseDetails] = useState( { notification: '', errors: []})

  const handleTitleChange = (event) => {
    event.preventDefault()

    setExpenditure({...expenditureDetails, title: event.target.value})
  }

  const handleAmountChange = (event) => {
    event.preventDefault()

    setExpenditure({...expenditureDetails, amount: event.target.value})
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({ expenditure: expenditureDetails })
  }

  const handleExpenditureSubmission = (event) => {
    event.preventDefault()

    fetch('/expenditure', options)
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
        value={expenditureDetails.title}
        onChange={event => handleTitleChange(event)}
        data-cy='expenditure-title'
      />
      <label>Amount</label>
      <input
        value={expenditureDetails.amount}
        onChange={event => handleAmountChange(event)}
        data-cy='expenditure-amount'
      />
      <input type="submit"
             value="Submit"
             onClick={event => handleExpenditureSubmission(event)}
             data-cy='submit-expenditure'
      />
    </>
  )
}

export default Expenditure
