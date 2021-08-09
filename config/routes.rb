Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users,  :controllers => { 
    :confirmations => "confirmations"
  }
  resources  :projects  do 
    resources :bugs 
  end
  
  root  "projects#index"
end
