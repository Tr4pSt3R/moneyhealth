# frozen_string_literal: true

class CreateIncome < ActiveRecord::Migration[7.1]
  def change
    create_table :incomes do |t|
      t.string :title
      t.integer :amount

      t.timestamps
    end
  end
end
