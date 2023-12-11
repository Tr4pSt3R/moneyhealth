# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Statements' do
  describe 'GET /index' do
    it 'returns http success' do
      get '/statement/index'
      expect(response).to have_http_status(:success)
    end
  end
end
