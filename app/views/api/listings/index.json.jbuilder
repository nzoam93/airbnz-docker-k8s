@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'listing', listing: listing
        # json.photoUrl listing.photo.url
    end
end
