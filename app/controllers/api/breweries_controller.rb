class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.all
  end

  def show
    @brewery = Brewery.find(params[:id])
    @user_reviews = @brewery.user_reviews(current_user)
  end

  def create
    @brewery = Brewery.new(brewery_params)
    if @brewery.save
      render json: @brewery
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end

  def update
    @brewery = Brewery.find(params[:id])
    if @brewery.update(brewery_params)
      render json: @brewery
    else
      render json: @brewery.errors.full_messages, status: 422
    end
  end

  def destroy
    @brewery = Brewery.find(params[:id])
    if @brewery
      @brewery.destroy
      render json: @brewery
    else
      render json: ["Brewery not found"], status: 404
    end
  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :location, :type, :description)
  end

end
