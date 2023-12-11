# frozen_string_literal: true

Rails.application.routes.draw do
  get 'statement', action: 'index', controller: 'statement'

  resources :income
  resources :expenditure

  root 'dashboard#index'
end
