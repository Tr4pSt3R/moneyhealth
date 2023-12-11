# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Expenditure do
  %i[title amount].each do |attr|
    it { is_expected.to validate_presence_of(attr) }
  end
end
