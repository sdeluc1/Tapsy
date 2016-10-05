class ChangeBreweryColumnName < ActiveRecord::Migration
  def change
    rename_column :breweries, :type, :brewery_type
  end
end
