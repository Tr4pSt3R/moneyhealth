# frozen_string_literal: true

class CreateExpenditures < ActiveRecord::Migration[7.1]
  def change
    create_table :expenditures do |t|
      t.string :title
      t.integer :amount

      t.timestamps
    end
  end
end
