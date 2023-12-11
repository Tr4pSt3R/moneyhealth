# frozen_string_literal: true

class StatementController < ApplicationController
  def index
    incomes = Income.all
    expenditures = Expenditure.all

    render json: { incomes:, expenditures: }, status: :ok
  end
end
