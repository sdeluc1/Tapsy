class Api::SessionsController < ApplicationController

  def create
   @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
   if @user
     log_in(@user)
     render json: @user
   else
     render json: ['invalid credentials'], status: 422
   end
 end

 def destroy
   if logged_in?
     log_out
     render json: {}
   else
     render json: ['no user to log out'], status: 404
   end
 end

end
