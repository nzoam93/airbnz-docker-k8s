class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :reserver, foreign_key: {to_table: :users}, null: false
      t.references :listing, foreign_key: true, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :num_guests, null: false
    end
  end
end
