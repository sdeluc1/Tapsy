Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :beers, only: [:index, :show, :create, :update, :destroy]
    resources :breweries, only: [:index, :create, :update, :destroy]
  end
end
