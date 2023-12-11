# frozen_string_literal: true

class Income < ApplicationRecord
  validates :amount, presence: true
end
