# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Customer do
  it { is_expected.to have_many(:statements) }
  it { is_expected.to have_many(:incomes).through(:statements) }
  it { is_expected.to have_many(:expenditures).through(:statements) }
end
