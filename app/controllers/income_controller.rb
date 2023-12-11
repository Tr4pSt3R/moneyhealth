# frozen_string_literal: true

class IncomeController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    income = Income.new income_params

    if income.save
      render json: { notification: 'Income successfully added to statement', errors: '' }, status: :created
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
