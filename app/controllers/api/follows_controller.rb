class Api::FollowsController < ApplicationController

  def create
    @follow = current_user.follows.new(follow_params)
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
  end

  def destroy
    @follow = Follow.find(params[:id])
    if @follow
      @follow.destroy
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follow_id)
  end

end
