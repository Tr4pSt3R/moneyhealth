# frozen_string_literal: true

class Customer < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :statements, dependent: :destroy
  has_many :incomes, through: :statements, source: :cashflow, source_type: 'Income'
  has_many :expenditures, through: :statements, source: :cashflow, source_type: 'Expenditure'
end
