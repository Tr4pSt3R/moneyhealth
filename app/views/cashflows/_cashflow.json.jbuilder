# frozen_string_literal: true

json.extract! cashflow, :id, :title, :amount, :type, :created_at, :updated_at
json.url cashflow_url(cashflow, format: :json)
