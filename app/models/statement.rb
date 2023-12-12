# frozen_string_literal: true

class Statement < ApplicationRecord
  belongs_to :customer
  belongs_to :cashflow, polymorphic: true
end
