# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  reviewer_id   :bigint           not null
#  listing_id    :bigint           not null
#  body          :string           not null
#  cleanliness   :integer          not null
#  communication :integer          not null
#  check_in      :integer          not null
#  accuracy      :integer          not null
#  location      :integer          not null
#  value         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :reviewer_id, :listing_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, presence: true

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end
