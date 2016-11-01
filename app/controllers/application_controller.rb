class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_user_follows
    follows = []
    Follow.all.each do |f|
      follows << f[:follow_id] if f[:user_id] == current_user[:id]
    end
    follows
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

end
