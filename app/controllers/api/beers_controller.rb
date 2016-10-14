class Api::BeersController < ApplicationController

  def index
    @top_beers = Beer.top_rated_beers
  end

  def show
    @beer = Beer.find(params[:id])
    @user_reviews = @beer.user_reviews(current_user)
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update(beer_params)
      render json: @beer
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    @beer = Beer.find(params[:id])
    if @beer
      @beer.destroy
      render :show
    else
      render json: ["Beer not found"], status: 404
    end
  end

  private
  def beer_params
    params.require(:beer).permit(:name, :brewery_id, :style, :abv, :ibu, :description)
  end

end
