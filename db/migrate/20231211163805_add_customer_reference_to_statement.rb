# frozen_string_literal: true

class AddCustomerReferenceToStatement < ActiveRecord::Migration[7.1]
  def change
    add_reference :statements, :customer, foreign_key: true
  end
end
