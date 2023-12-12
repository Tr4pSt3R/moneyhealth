# frozen_string_literal: true

class IncomeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    income = Income.build(income_params)

    if income.valid?
      if current_customer.statements.build(cashflow: income)
        render json: { notification: 'Income successfully added to statement', errors: [] }, status: :created
      end
    else
      render json: { notification: 'Income could not be saved to statement', errors: income.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def income_params
    params.require(:income).permit(:title, :amount)
  end
end
