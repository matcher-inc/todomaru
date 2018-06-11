# frozen_string_literal: true

class Web::Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  respond_to :json

  def create
    #return head 200
    build_resource(sign_up_params)

    resource.save!
    if resource.active_for_authentication?
      sign_up(resource_name, resource)
    else
      expire_data_after_sign_in!
    end
  rescue
    clean_up_passwords
    set_minimum_password_length
    raise
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
