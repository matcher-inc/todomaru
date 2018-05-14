Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'web/users/registrations',
    sessions: 'web/users/sessions',
    passwords: 'web/users/passwords',
  }

  devise_scope :user do
    get 'sign_in', to: 'web/users/sessions#new'
    post 'sign_in', to: 'web/users/sessions#create'
    delete 'sign_out', to: 'web/users/sessions#destroy'
  end

  scope module: :web, format: :json do
    root to: 'home#dashboard'
    resources :users do
      resources :todos
    end
  end
end
