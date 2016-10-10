Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :beers
    resources :breweries
    resources :reviews, only: [:index, :create, :show, :destroy]
    resources :follows, only: [:index, :create, :destroy]
  end
end
