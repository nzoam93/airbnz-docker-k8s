class Api::ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :update, :destroy]

    def index
        if params[:search]
            search_terms = params[:search].downcase.split(" ") #turn into an array with split
        end
        if search_terms
            @search_query = []
            search_terms.each do |search_term|
                #LOWER to make it match lowercase entry from frontend
                @search_query << Listing.where('LOWER(listings.city) LIKE ?', "%#{search_term}%")
                                        # .or(Listing.where('listings.type LIKE ?', "%#{search_term}%")
            end
            #this takes the intersection of all the listings (i.e. "San" and "Francisco")
            @listings = @search_query.reduce(:and)
        else
            @listings = Listing.all
        end

    end

    def show
        render :show
    end

    def create
        @listing = Listing.new(review_params)

        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing.destroy
        head :no_content # return header only
    end


    private
    def set_listing
        @listing = Listing.find(params[:id])
    rescue
        render json: ['Listing not found'], status: :not_found
    end

    def listing_params
        params.require(:listing).permit(
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
        )
    end
end
