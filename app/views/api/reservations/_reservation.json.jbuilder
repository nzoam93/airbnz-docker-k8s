json.extract! reservation,
    :id,
    :reserver_id,
    :listing_id,
    :check_in_date,
    :check_out_date,
    :num_guests

#adding key-value pairs to have access to the reservation's listing's attributes
#this makes use of the associations in the reservation model
json.listing_title reservation.listing.title
json.listing_description reservation.listing.description
json.listing reservation.listing

json.start_date reservation.check_in_date.strftime("%b %e")
json.end_date reservation.check_out_date.strftime("%b %e")
