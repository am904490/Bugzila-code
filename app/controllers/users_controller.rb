class UsersController < ApplicationController
	before_action :authenticate_user!
  before_action :authenticate_user!, only: [:show]
end
