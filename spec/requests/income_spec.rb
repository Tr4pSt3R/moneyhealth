# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Incomes' do
  describe 'POST /income' do
    subject(:post_request) { post '/income', params: }

    context 'when provided with invalid attributes' do
      let(:params) { { income: { title: '' } } }

      it 'does not create an income' do
        post_request

        expect(response).not_to have_http_status(:created)
      end
    end

    context 'when provided with valid attributes' do
      let(:customer) do
        Customer.create(
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          password: '123456',
          password_confirmation: '123456'
        )
      end

      let(:params) { { income: { title: 'Salary', amount: 200 } } }

      it 'creates an income' do
        sign_in customer
        post_request

        expect(response).to have_http_status(:created)
      end
    end
  end
end
