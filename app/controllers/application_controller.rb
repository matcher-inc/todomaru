class ApplicationController < ActionController::Base
  include Banken

  before_action :set_csrf_cookie

  private

    def set_csrf_cookie
      cookies['X-CSRF-Token'] = form_authenticity_token if protect_against_forgery?
    end
end
