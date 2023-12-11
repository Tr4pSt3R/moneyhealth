# frozen_string_literal: true

require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe '/cashflows' do
  # This should return the minimal set of attributes required to create a valid
  # Cashflow. As you add validations to Cashflow, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    skip('Add a hash of attributes valid for your model')
  end

  let(:invalid_attributes) do
    skip('Add a hash of attributes invalid for your model')
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      Cashflow.create! valid_attributes
      get cashflows_url
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      cashflow = Cashflow.create! valid_attributes
      get cashflow_url(cashflow)
      expect(response).to be_successful
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_cashflow_url
      expect(response).to be_successful
    end
  end

  describe 'GET /edit' do
    it 'renders a successful response' do
      cashflow = Cashflow.create! valid_attributes
      get edit_cashflow_url(cashflow)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new Cashflow' do
        expect do
          post cashflows_url, params: { cashflow: valid_attributes }
        end.to change(Cashflow, :count).by(1)
      end

      it 'redirects to the created cashflow' do
        post cashflows_url, params: { cashflow: valid_attributes }
        expect(response).to redirect_to(cashflow_url(Cashflow.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new Cashflow' do
        expect do
          post cashflows_url, params: { cashflow: invalid_attributes }
        end.not_to change(Cashflow, :count)
      end

      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post cashflows_url, params: { cashflow: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) do
        skip('Add a hash of attributes valid for your model')
      end

      it 'updates the requested cashflow' do
        cashflow = Cashflow.create! valid_attributes
        patch cashflow_url(cashflow), params: { cashflow: new_attributes }
        cashflow.reload
        skip('Add assertions for updated state')
      end

      it 'redirects to the cashflow' do
        cashflow = Cashflow.create! valid_attributes
        patch cashflow_url(cashflow), params: { cashflow: new_attributes }
        cashflow.reload
        expect(response).to redirect_to(cashflow_url(cashflow))
      end
    end

    context 'with invalid parameters' do
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        cashflow = Cashflow.create! valid_attributes
        patch cashflow_url(cashflow), params: { cashflow: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested cashflow' do
      cashflow = Cashflow.create! valid_attributes
      expect do
        delete cashflow_url(cashflow)
      end.to change(Cashflow, :count).by(-1)
    end

    it 'redirects to the cashflows list' do
      cashflow = Cashflow.create! valid_attributes
      delete cashflow_url(cashflow)
      expect(response).to redirect_to(cashflows_url)
    end
  end
end
