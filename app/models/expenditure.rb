# frozen_string_literal: true

class Expenditure < ApplicationRecord
  validates :title, :amount, presence: true
end
