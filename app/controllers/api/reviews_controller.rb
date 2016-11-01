class Api::ReviewsController < ApplicationController

  def index
    if params[:beer_id]
      @reviews = Review.all
        .includes(:comments, :author, :beer => :brewery)
        .where(beer_id: params[:beer_id])
        .order(id: :desc)
        .limit(10).offset(params[:offset])
    elsif params[:author_id]
      @reviews = Review.all
        .includes(:comments, :author, :beer => :brewery)
        .where(author_id: params[:author_id])
        .order(id: :desc)
        .limit(10).offset(params[:offset])
    elsif params[:brewery_id]
      @reviews = Review.all
        .includes(:comments, :author, :beer => :brewery)
        .joins(:brewery)
        .where("beers.brewery_id = #{params[:brewery_id]}")
        .order(id: :desc)
        .limit(10).offset(params[:offset])
    elsif params[:curr_user]
      @reviews = Review.all
        .includes(:comments, :author, :beer => :brewery)
        .where(:author_id => current_user_follows)
        .limit(10).offset(params[:offset])
    else
      @reviews = Review.all
        .includes(:comments, :author, :beer => :brewery)
        .order(id: :desc)
        .limit(10).offset(params[:offset])
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
