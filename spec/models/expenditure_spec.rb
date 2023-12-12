# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Expenditure do
  %i[title amount].each do |attr|
    it { is_expected.to validate_presence_of(attr) }
  end

  it { is_expected.to validate_numericality_of(:amount) }

  it { is_expected.to have_many(:statements) }
  it { is_expected.to have_many(:customers).through(:statements) }
end
