# frozen_string_literal: true

class Income < ApplicationRecord
  has_many :statements, dependent: :destroy, as: :cashflow
  has_many :customers, through: :statements

  validates :title, :amount, presence: true
end
