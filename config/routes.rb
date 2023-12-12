# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :customers
  get 'statement', action: 'index', controller: 'statement'

  resources :income
  resources :expenditure

  root 'dashboard#index'
end
