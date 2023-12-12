# frozen_string_literal: true

class CreateStatements < ActiveRecord::Migration[7.1]
  def change
    create_table :statements, &:timestamps
  end
end
