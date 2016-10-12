class Api::BeersController < ApplicationController

  def index
    @beers = Beer.all.includes(:reviews)
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render json: @beer
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
