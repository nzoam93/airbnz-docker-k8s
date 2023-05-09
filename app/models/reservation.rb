# == Schema Information
#
# Table name: reservations
#
#  id             :bigint           not null, primary key
#  reserver_id    :bigint           not null
#  listing_id     :bigint           not null
#  check_in_date  :date             not null
#  check_out_date :date             not null
#  num_guests     :integer          not null
#
class Reservation < ApplicationRecord
    validates :reserver_id, :listing_id, :check_in_date, :check_out_date, :num_guests, presence: true

    belongs_to :reserver,
        foreign_key: :reserver_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing 
end
