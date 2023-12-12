# frozen_string_literal: true

class ExpenditureController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    expenditure = Expenditure.build(expenditure_params)

    if expenditure.valid?
      if current_customer.statements.create(cashflow: expenditure)
        render json: { notification: 'Expenditure successfully added to statement', errors: [] }, status: :created
      end
    else
      render json: { notification: 'Expenditure could not be saved to statement', errors: expenditure.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def expenditure_params
    params.require(:expenditure).permit(:title, :amount)
  end
end
