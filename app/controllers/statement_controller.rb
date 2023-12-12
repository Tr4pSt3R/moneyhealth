# frozen_string_literal: true

class StatementController < ApplicationController
  def index
    incomes = current_customer.incomes
    expenditures = current_customer.expenditures

    render json: { incomes:, expenditures: }, status: :ok
  end
end
