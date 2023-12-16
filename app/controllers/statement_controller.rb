# frozen_string_literal: true

class StatementController < ApplicationController
  def index
    incomes = current_customer.incomes.order(created_at: :desc)
    expenditures = current_customer.expenditures.order(created_at: :desc)

    render json: { incomes:, expenditures: }, status: :ok
  end
end
