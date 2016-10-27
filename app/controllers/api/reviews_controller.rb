class Api::ReviewsController < ApplicationController

  def index
    if params[:beer_id]
      @reviews = Review.all.where(beer_id: params[:beer_id])
    else
      @reviews = Review.all.includes(:author, :beer => :brewery)
    end 
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review
      @review.destroy
      render :show
    else
      render json: ["Review not found"], status: 404
    end
  end

  private
  def review_params
    params.require(:review).permit(:beer_id, :rating, :description, :image)
  end

end
