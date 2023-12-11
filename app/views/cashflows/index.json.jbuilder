# frozen_string_literal: true

json.array! @cashflows, partial: 'cashflows/cashflow', as: :cashflow
