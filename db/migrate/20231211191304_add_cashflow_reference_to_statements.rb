# frozen_string_literal: true

class AddCashflowReferenceToStatements < ActiveRecord::Migration[7.1]
  def change
    add_reference :statements, :cashflow, polymorphic: true
  end
end
