class Api::SearchController < ApplicationController

  def index
    @beers = Beer.where('name ~* ?', params[:query])
  end

end
