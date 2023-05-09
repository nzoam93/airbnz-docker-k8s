# json.partial! 'review', review: @review

json.extract! @review, :id, :reviewer_id, :listing_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at

#key-value pair to get username in front end
json.username @review.reviewer.username

json.create_date @review.created_at.strftime("%b %e, %Y")
json.update_date @review.updated_at.strftime("%b %e, %Y")

#.reviewer is the review association
#.photo is the user association
#.url is the AWS method
json.profile_pic @review.reviewer.photo.url
