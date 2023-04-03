Rails.application.routes.draw do
  get 'menu/index'
  root 'menu#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
