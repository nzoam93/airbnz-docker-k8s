Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #route for testing purposes
  # post 'api/test', to: 'application#test'

  #namespace api makes it such that the rails routes are api/users, etc
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :listings do
      resources :reviews, only: [:index]
    end
    resources :reservations
    resources :reviews, only: [:create, :update, :destroy]
  end

  #this is for the deployment to render.com
  get '*path', to: 'static_pages#frontend'
end
