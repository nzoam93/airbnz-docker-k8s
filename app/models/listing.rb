# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  owner_id    :bigint           not null
#  title       :string           not null
#  description :text             not null
#  address     :string           not null
#  city        :string           not null
#  state       :string           not null
#  zip_code    :integer          not null
#  price       :float            not null
#  num_beds    :integer          not null
#  num_baths   :float            not null
#  num_guests  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  latitude    :float
#  longitude   :float
#
class Listing < ApplicationRecord
    validates :owner_id, :title, :description, :address, :city, :state, :zip_code, :price, :num_beds, :num_baths, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :reservations,
        foreign_key: :listing_id,
        class_name: :Reservation,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review,
        dependent: :destroy

    #aws stuff
    has_many_attached :photos
end
