# @reviews.each do |review|
#     json.set! review.id do
#         json.partial! 'review', review: review
#     end
# end

@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :reviewer_id, :listing_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at

        #another key-value pair for extracting the username
        json.username review.reviewer.username

        #.reviewer is the review association
        #.photo is the user association
        #.url is the AWS method
        json.profile_pic review.reviewer.photo.url

        #this is for the date
        json.create_date review.created_at.strftime("%b %e, %Y")
        json.update_date review.updated_at.strftime("%b %e, %Y")
    end
end
