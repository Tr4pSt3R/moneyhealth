# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CashflowsController do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/cashflows').to route_to('cashflows#index')
    end

    it 'routes to #new' do
      expect(get: '/cashflows/new').to route_to('cashflows#new')
    end

    it 'routes to #show' do
      expect(get: '/cashflows/1').to route_to('cashflows#show', id: '1')
    end

    it 'routes to #edit' do
      expect(get: '/cashflows/1/edit').to route_to('cashflows#edit', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/cashflows').to route_to('cashflows#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/cashflows/1').to route_to('cashflows#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/cashflows/1').to route_to('cashflows#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/cashflows/1').to route_to('cashflows#destroy', id: '1')
    end
  end
end
