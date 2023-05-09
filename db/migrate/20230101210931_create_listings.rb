class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :owner, foreign_key: {to_table: :users}, null:false
      t.string :title, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.string :city, null: false, index: true
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.float :price, null: false
      t.integer :num_beds, null: false
      t.float :num_baths, null: false
      t.integer :num_guests, null: false 
      t.timestamps
    end
  end
end
