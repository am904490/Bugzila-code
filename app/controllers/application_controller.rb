class ApplicationController < ActionController::Base
before_action :authenticate_user!
before_action :configure_permitted_parameters, if: :devise_controller?
 

 protected
  def configure_permitted_parameters
  	devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password , :password_confirmation, :usertype ) }
  end	

  #rescue_form CanCan::AccessDenied do |exception|
   # flash[:alert] = "Failed to create."
    #redirect_to root_path
  #end
end
