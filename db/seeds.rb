# frozen_string_literal: true

customer = Customer.create(
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  password: '123456',
  password_confirmation: '123456'
)

{
  'Income' => [
    { title: 'Salary', amount: 2800 },
    { title: 'Other', amount: 300 }
  ],
  'Expenditure' => [
    { title: 'Mortgage', amount: 500 },
    { title: 'Utilities', amount: 100 },
    { title: 'Travel', amount: 150 },
    { title: 'Food', amount: 500 },
    { title: 'Loan Repayment', amount: 1000 }
  ]
}.each do |type, data|
  data.each do |flow|
    customer.statements.create(cashflow: type.safe_constantize.create(flow))
  end
end
