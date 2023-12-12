# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Statement do
  it { is_expected.to belong_to(:customer) }
  it { is_expected.to belong_to(:cashflow) }
end
