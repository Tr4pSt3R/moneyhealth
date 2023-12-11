# frozen_string_literal: true

class ExpenditureController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    expenditure = Expenditure.new expenditure_params

    if expenditure.save
      render json: { notification: 'Expenditure successfully added to statement', errors: '' }, status: :created
    else
      render json: {
               notification: 'Expenditure could not be saved to statement',
               errors: expenditure.errors.full_messages
             },
             status: :unprocessable_entity
    end
  end

  private

  def expenditure_params
    params.require(:expenditure).permit(:title, :amount)
  end
end
