json.extract! listing,
    :id,
    :owner_id,
    :title,
    :description,
    :address,
    :city,
    :state,
    :zip_code,
    :price,
    :num_beds,
    :num_baths,
    :num_guests,
    :latitude,
    :longitude
#We added another key-value pairing to allow us to grab the owner username
json.owner_name listing.owner.username

#adding key-value pair for profile pic
json.profile_img listing.owner.photo.url

#adding another key-value pair that will be available in state under listing.photo_urls
#COMMENT THIS BACK IN TO USE AWS
json.photo_urls listing.photos.map{|photo| photo.url}
