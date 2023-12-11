# frozen_string_literal: true

class CreateCashflows < ActiveRecord::Migration[7.1]
  def change
    create_table :cashflows do |t|
      t.string :title
      t.integer :amount
      t.string :type

      t.timestamps
    end
  end
end
