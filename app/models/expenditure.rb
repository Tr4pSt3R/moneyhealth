# frozen_string_literal: true

class Expenditure < ApplicationRecord
  has_many :statements, dependent: :destroy, as: :cashflow
  has_many :customers, through: :statements

  validates :title, presence: true
  validates :amount, presence: true, numericality: { only_integer: true }
end
