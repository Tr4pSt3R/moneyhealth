# frozen_string_literal: true

class CreateCashflows < ActiveRecord::Migration[7.1]
  def change
    create_table :cashflows do |t|
      t.string :title
      t.integer :amount
      t.bigint :cashflow_id
      t.string :cashflow_type
      t.timestamps
    end

    add_index :cashflows, %i[cashflow_type cashflow_id]
  end
end
