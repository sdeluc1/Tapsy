class Api::SearchController < ApplicationController

  def index
    @beers = Beer.where('name ~* ?', params[:query])
    @breweries = Brewery.where('name ~* ?', params[:query])
    @sections = [
      {title: "BEERS (#{@beers.length})", beers: @beers},
      {title: "BREWERIES (#{@breweries.length})", breweries: @breweries}
    ]
  end

end
