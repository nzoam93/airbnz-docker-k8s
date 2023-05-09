# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



#aws stuff
require "open-uri"

#example for aws seeding. Make sure to use the real url AND to not put inside of appilcaitonrecord.transaction

# Attach bench photos
# Bench.first(3).each_with_index do |bench, index|
#   bench.photo.attach(
#     # The string passed to URI.open should be the URL of the image in its bucket.
#     # This sample assumes the bucket name is `benchbnb-seeds`.
#     io: URI.open("https://benchbnb-seeds.s3.amazonaws.com/bench_#{index + 1}.jpg"),
#     filename: "bench_#{index + 1}.jpg"
#   )
# end


# ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Reservation.destroy_all
    Listing.destroy_all
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reservations')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    user1 = User.create!(
      username: 'Demo Dan',
      email: 'demo@user.io',
      password: 'password'
    )

    user1.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/userphoto1.jpg"), filename: "userphoto1.jpg")

    user2 = User.create!(
      username: 'Noam',
      email: 'noam@gmail.com',
      password: 'password'
    )

    user2.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/userphoto2.jpg"), filename: "userphoto2.jpg")

    # More users
    user3 = User.create!(
      username: 'Kyle',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user4 = User.create!(
      username: 'Nicole',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user5 = User.create!(
      username: 'Marcos',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user6 = User.create!(
      username: 'Morgan',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user7 = User.create!(
      username: 'Dylan',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user8 = User.create!(
      username: 'Margaret',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user9 = User.create!(
      username: 'Daphne',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user10 = User.create!(
      username: 'Jake',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user11 = User.create!(
      username: 'Antoine',
      email: Faker::Internet.unique.email,
      password: 'password'
    )
    user12 = User.create!(
      username: 'Christine',
      email: Faker::Internet.unique.email,
      password: 'password'
    )

    user3.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person1.jpg"), filename: "person1.jpg")
    user4.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person2.jpg"), filename: "person2.jpg")
    user5.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person3.jpg"), filename: "person3.jpg")
    user6.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person4.jpg"), filename: "person4.jpg")
    user7.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person5.jpg"), filename: "person5.jpg")
    user8.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person6.jpg"), filename: "person6.jpg")
    user9.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person7.jpg"), filename: "person7.jpg")
    user10.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person8.jpg"), filename: "person8.jpg")
    user11.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person9.jpg"), filename: "person9.jpg")
    user12.photo.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/person10.jpg"), filename: "person10.jpg")

    puts "Creating listings..."
    listing1 = Listing.create!(
      owner_id: 7,
      title: '3 Bedroom in Marin',
      description: 'You can walk to Dillon Beach within 15 minutes! You should stay here if you would like to have a great time at the beach!',
      address: '2098 Harrison St',
      city: 'Marin',
      state: 'CA',
      zip_code: '94605',
      price: 500,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 38.23954,
      longitude: -122.93603
    )

    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1.jpg"), filename: "house1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room1.jpg"), filename: "house1room1.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room2.jpg"), filename: "house1room2.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room3.jpg"), filename: "house1room3.jpg")
    listing1.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house1room4.jpg"), filename: "house1room4.jpg")

    listing2 = Listing.create!(
      owner_id: 4,
      title: '4 Bedroom in Palo Alto',
      description: 'This location is fantastic for any university students or families of students. It is just a short walk to campus!',
      address: '253 Berkeley Way',
      city: 'Palo Alto',
      state: 'CA',
      zip_code: '94131',
      price: 700,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.43815,
      longitude: -122.15576
    )

    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2.jpg"), filename: "house2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room1.jpg"), filename: "house2room1.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room2.jpg"), filename: "house2room2.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room3.jpg"), filename: "house2room3.jpg")
    listing2.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house2room4.jpg"), filename: "house2room4.jpg")

    listing3 = Listing.create!(
      owner_id: 5,
      title: '4 Bedroom in San Jose',
      description: 'This location blends the desirability of being in the San Jose metropolis with the proximity of being close to the mountains.',
      address: '279 Carolina St',
      city: 'San Jose',
      state: 'CA',
      zip_code: '94590',
      price: 300,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.32162,
      longitude: -121.76291
    )

    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3.jpg"), filename: "house3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room1.jpg"), filename: "house3room1.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room2.jpg"), filename: "house3room2.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room3.jpg"), filename: "house3room3.jpg")
    listing3.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house3room4.jpg"), filename: "house3room4.jpg")

    listing4 = Listing.create!(
      owner_id: 6,
      title: '5 Bedroom in San Rafael',
      description: 'Near San Quentin Beach! Also right next to the Richmond Bridge for easy access to the East Bay!',
      address: '123 San Rafael St',
      city: 'San Rafael',
      state: 'CA',
      zip_code: '94605',
      price: 800,
      num_beds: 5,
      num_baths: 3,
      num_guests: 10,
      latitude: 37.94228,
      longitude: -122.48462
    )

    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4.jpg"), filename: "house4.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room1.jpg"), filename: "house4room1.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room2.jpg"), filename: "house4room2.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room3.jpg"), filename: "house4room3.jpg")
    listing4.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house4room4.jpg"), filename: "house4room4.jpg")


    listing5 = Listing.create!(
      owner_id: 3,
      title: '3 Bedroom in Richmond',
      description: 'Just steps away from Point Molate Beach Park! Come here with your pups and enjoy a day of playing frisbee at the park. ',
      address: '123 Richmond St',
      city: 'Richmond',
      state: 'CA',
      zip_code: '94605',
      price: 250,
      num_beds: 3,
      num_baths: 1,
      num_guests: 6,
      latitude: 37.94700,
      longitude: -122.41495
    )

    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5.jpg"), filename: "house5.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room1.jpg"), filename: "house5room1.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room2.jpg"), filename: "house5room2.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room3.jpg"), filename: "house5room3.jpg")
    listing5.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs/house5room4.jpg"), filename: "house5room4.jpg")

    listing6 = Listing.create!(
      owner_id: 8,
      title: '2 Bedroom in San Mateo',
      description: 'Perfect location for all fellow golfers! It is just a short drive to Crystal Springs Golf Course. We even provide complimentary golf balls upon check in.',
      address: '123 San Mateo St',
      city: 'San Mateo',
      state: 'CA',
      zip_code: '94605',
      price: 150,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4,
      latitude: 37.56958,
      longitude: -122.34722
    )

    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6.jpg"), filename: "house6.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room1.jpg"), filename: "house6room1.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room2.jpg"), filename: "house6room2.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room3.jpg"), filename: "house6room3.jpg")
    listing6.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house6room4.jpg"), filename: "house6room4.jpg")

    listing7 = Listing.create!(
      owner_id: 9,
      title: '3 Bedroom in San Francisco',
      description: 'Ever wanted to be in the heart of San Francisco? Then this place is the perfect airbNZ for you! Walk to the Mission district, hang out at Dolores Park on a beautiful Saturday afternoon. The possibilities are endless.',
      address: '123 San Francisco St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 630,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 37.75931,
      longitude: -122.43428
    )

    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7.jpg"), filename: "house7.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room1.jpg"), filename: "house7room1.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room2.jpg"), filename: "house7room2.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room3.jpg"), filename: "house7room3.jpg")
    listing7.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house7room4.jpg"), filename: "house7room4.jpg")

    listing8 = Listing.create!(
      owner_id: 10,
      title: '4 Bedroom in Oakland',
      description: 'You are right next to Lake Merritt! Bring your binoculars and come observe all the seabirds and wildlife around the lake!',
      address: '123 Marin St',
      city: 'Oakland',
      state: 'CA',
      zip_code: '94605',
      price: 545,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 37.80933,
      longitude: -122.26287

    )

    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8.jpg"), filename: "house8.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room1.jpg"), filename: "house8room1.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room2.jpg"), filename: "house8room2.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room3.jpg"), filename: "house8room3.jpg")
    listing8.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house8room4.jpg"), filename: "house8room4.jpg")

    listing9 = Listing.create!(
      owner_id: 11,
      title: '6 Bedroom in South Lake Tahoe',
      description: 'Hope you brought your skis! This location is idlyic and is perfect for those who want a relaxing getaway by Lake Tahoe.',
      address: '123 Tahoe St',
      city: 'South Lake Tahoe',
      state: 'CA',
      zip_code: '94605',
      price: 430,
      num_beds: 6,
      num_baths: 3,
      num_guests: 12,
      latitude: 38.92616,
      longitude: -119.99954
    )

    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9.jpg"), filename: "house9.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room1.jpg"), filename: "house9room1.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room2.jpg"), filename: "house9room2.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room3.jpg"), filename: "house9room3.jpg")
    listing9.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house9room4.jpg"), filename: "house9room4.jpg")

    listing10 = Listing.create!(
      owner_id: 12,
      title: '2 Bedroom in SF',
      description: 'For those that want a break of the hustle and bustle of the city, but still want access to all San Francisco has to offer, this could be the place for you. It is right next to Golden Gate Park, a beautiful park 1.2 times larger than Central Park!',
      address: '123 San Francisco St',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94605',
      price: 160,
      num_beds: 2,
      num_baths: 1,
      num_guests: 4,
      latitude: 37.77758,
      longitude: -122.45891
    )

    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10.jpg"), filename: "house10.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room1.jpg"), filename: "house10room1.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room2.jpg"), filename: "house10room2.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room3.jpg"), filename: "house10room3.jpg")
    listing10.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house10room4.jpg"), filename: "house10room4.jpg")

    listing11 = Listing.create!(
      owner_id: 11,
      title: '2 Bedroom in Santa Cruz',
      description: 'Picturesque location in Santa Cruz. Close to both the Santa Cruz beach and the mountains!',
      address: '123 Santa Cruz St',
      city: 'Santa Cruz',
      state: 'CA',
      zip_code: '94605',
      price: 340,
      num_beds: 4,
      num_baths: 2,
      num_guests: 8,
      latitude: 36.96380,
      longitude: -122.01830
    )

    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11.jpg"), filename: "house11.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room1.jpg"), filename: "house11room1.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room2.jpg"), filename: "house11room2.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room3.jpg"), filename: "house11room3.jpg")
    listing11.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house11room4.jpg"), filename: "house11room4.jpg")

    listing12 = Listing.create!(
      owner_id: 10,
      title: '3 Bedroom in Pacifica',
      description: 'Bring your surf board when you come visit. This location is just a 2 minute walk to the beach! Pristine views in all directions!',
      address: '123 Pacifica St',
      city: 'Pacifica',
      state: 'CA',
      zip_code: '94605',
      price: 95,
      num_beds: 3,
      num_baths: 2,
      num_guests: 6,
      latitude: 37.61614,
      longitude: -122.49047
    )

    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12.jpg"), filename: "house12.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room1.jpg"), filename: "house12room1.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room2.jpg"), filename: "house12room2.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room3.jpg"), filename: "house12room3.jpg")
    listing12.photos.attach(io: URI.open("https://airbnz-seeds.s3.us-west-1.amazonaws.com/House+Imgs+Cont/house12room4.jpg"), filename: "house12room4.jpg")

    puts "Creating reservations..."
    reservation1 = Reservation.create!(
      reserver_id: 1,
      listing_id: 4,
      check_in_date: "2023-01-15",
      check_out_date: "2023-01-19",
      num_guests: 6
    )

    reservation2 = Reservation.create!(
      reserver_id: 2,
      listing_id: 5,
      check_in_date: "2023-01-14",
      check_out_date: "2023-01-17",
      num_guests: 6
    )

    puts "Creating Reviews..."
    # Create one user with an easy to remember username, email, and password:
    review1 = Review.create!(
      reviewer_id: 4,
      listing_id: 1,
      body: 'The home was cozy, clean and well-appointed with all the amenities I needed for a comfortable stay. The location was ideal, surrounded by lush greenery and with breathtaking views nearby of the Pacific Ocean. I was also impressed by the hospitality of the host, who was always available to answer any questions and provide local recommendations. I had the opportunity to explore the nearby hiking trails, visit the charming towns of Sausalito and Tiburon, and indulge in the delicious farm-to-table cuisine the area is known for. Overall, I would highly recommend this Airbnb to anyone looking for a relaxing and rejuvenating getaway in Marin County.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 5
    )

    review2 = Review.create!(
      reviewer_id: 7,
      listing_id: 2,
      body: 'The location was perfect - it was just a short walk away from the campus, making it incredibly convenient for my needs. I was able to quickly and easily get to all of my appointments and classes without any hassle. The neighborhood was also safe and quiet, making for a peaceful and enjoyable stay. Overall, I would highly recommend this Airbnb to anyone visiting the Palo Alto area, especially if you need to be near the campus. It was the perfect combination of convenience, comfort, and value.',
      cleanliness: 4,
      communication: 4,
      check_in: 5,
      accuracy: 4,
      location: 4,
      value: 5
    )

    review3 = Review.create!(
      reviewer_id: 4,
      listing_id: 3,
      body: 'The highlight of my trip was definitely the pool - it was well-maintained, clean, and perfect for a refreshing swim on hot days. The pool area was also equipped with plenty of lounge chairs and umbrellas, making it a great place to relax and soak up the sun.',
      cleanliness: 4,
      communication: 3,
      check_in: 5,
      accuracy: 3,
      location: 3,
      value: 5
    )

    review4 = Review.create!(
      reviewer_id: 5,
      listing_id: 4,
      body: 'One of the highlights of my trip was the beautiful green yard that was available for me to enjoy. The yard was well-maintained and offered a peaceful and relaxing environment for me to spend my time in. Whether I was reading a book, taking a nap, or simply admiring the lush greenery, the yard was a true oasis in the middle of the city.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 5,
      value: 5
    )

    review5 = Review.create!(
      reviewer_id: 12,
      listing_id: 5,
      body: 'One of the highlights of my trip was the beautiful lights that were throughout the property. Whether I was relaxing in my room, spending time in the common areas, or taking a stroll outside, the lights added a warm and inviting ambiance that made me feel right at home. The property was also well-maintained and clean, and the hosts were friendly and welcoming. I would definitely recommend this Airbnb to anyone visiting the Richmond area and looking for a comfortable and cozy place to stay.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 5,
      value: 3
    )

    review6 = Review.create!(
      reviewer_id: 6,
      listing_id: 6,
      body: 'The standout feature of the property was definitely the pool - it was a beautiful and well-maintained oasis that was perfect for a refreshing swim or simply lounging by the water. The pool area was also equipped with plenty of comfortable chairs, umbrellas, and other amenities, making it a great place to relax and soak up the sun. The property was also located in a convenient and safe neighborhood, and the hosts were friendly and accommodating. I would highly recommend this Airbnb to anyone visiting the San Mateo area and looking for a comfortable and enjoyable place to stay with a beautiful pool.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 5,
      value: 4
    )

    review7 = Review.create!(
      reviewer_id: 7,
      listing_id: 7,
      body: 'The property was located in a convenient and accessible neighborhood, with plenty of shops, restaurants, and attractions nearby. The hosts were friendly and accommodating, and the property was well-maintained and clean. I especially appreciated the unique and stylish decor, which added a touch of charm and personality to my stay. Overall, I would highly recommend this Airbnb to anyone visiting San Francisco and looking for a comfortable and enjoyable place to stay in a great location.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 5,
      location: 3,
      value: 5
    )

    review8 = Review.create!(
      reviewer_id: 8,
      listing_id: 8,
      body: 'The location was perfect - Lake Merritt is a beautiful and peaceful oasis in the heart of the city, and it was just a short walk from the property. Whether I was taking a stroll by the lake, picnicking in the park, or simply enjoying the scenery, I was constantly in awe of the natural beauty of the area. The property itself was also well-maintained, clean, and equipped with all the necessary amenities. The hosts were friendly and accommodating, and I felt right at home throughout my stay.',
      cleanliness: 4,
      communication: 3,
      check_in: 4,
      accuracy: 4,
      location: 5,
      value: 5
    )

    review9 = Review.create!(
      reviewer_id: 10,
      listing_id: 9,
      body: 'The location was perfect - it was close to some of the best ski resorts in the area, making it incredibly convenient for us to hit the slopes each day. The hosts were friendly and accommodating, and the property was well-maintained and clean. I especially appreciated the warm and cozy atmosphere of the place, which made it a great place to come back to after a long day of skiing.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 5,
      value: 5
    )

    review10 = Review.create!(
      reviewer_id: 9,
      listing_id: 10,
      body: 'I recently stayed at a small but cozy Airbnb in San Francisco and had a wonderful experience. The property may have been small, but it was packed with character and charm. I loved the unique and stylish decor, which made the place feel warm and inviting. Despite its size, the property was well-maintained and clean, and had all the necessary amenities. The location was also great - it was in a convenient and accessible neighborhood, with plenty of shops, restaurants, and attractions nearby. ',
      cleanliness: 4,
      communication: 5,
      check_in: 3,
      accuracy: 5,
      location: 2,
      value: 5
    )

    review11 = Review.create!(
      reviewer_id: 12,
      listing_id: 11,
      body: 'The location was perfect - it was just a short walk from the sand and surf, making it incredibly easy for us to spend time at the beach. The property was well-maintained and clean, and the hosts were friendly and accommodating. I especially appreciated the unique and charming atmosphere of the place, which added a touch of personality to our stay.',
      cleanliness: 4,
      communication: 4,
      check_in: 5,
      accuracy: 2,
      location: 3,
      value: 5
    )

    review12 = Review.create!(
      reviewer_id: 5,
      listing_id: 12,
      body: 'Despite being cheap, the property was well-maintained and clean, and had all the necessary amenities. The location was also perfect - it was in a convenient and accessible neighborhood, with plenty of shops, restaurants, and attractions nearby. The hosts were friendly and accommodating, and I felt right at home throughout my stay. I especially appreciated the charming and cozy atmosphere of the place, which made for a relaxing and enjoyable getaway.',
      cleanliness: 4,
      communication: 3,
      check_in: 2,
      accuracy: 5,
      location: 2,
      value: 5
    )

    review13 = Review.create!(
      reviewer_id: 3,
      listing_id: 1,
      body: 'The location was perfect - it was just a short walk or drive from Dillon Beach, which made for some stunning views and plenty of opportunities for outdoor activities',
      cleanliness: 5,
      communication: 5,
      check_in: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )




    puts "Done!"
  # end
