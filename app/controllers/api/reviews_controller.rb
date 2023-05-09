class Api::ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]

    def index
        incoming_listing_id = params[:listing_id]
        @reviews = Review.where(listing_id: incoming_listing_id)
        render :index
        # Active Record query in order to get more than one result (find_by would just give one)
        # @reviews = Review.where(listing_id: params[:listing_id])
    end

    def show

        # render :show
    end

    def create
        @review = Review.new(review_params)
        # @review.reviewer_id = current_user.id
        # @review.listing_id = params[:listing_id]
        # if @review && @review.save
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review.destroy
        head :no_content # return header only
    end


    private
    def set_review
        @review = Review.find(params[:id])
    rescue
        render json: ['Review not found'], status: :not_found
    end

    def review_params
        params.require(:review).permit(
            :reviewer_id,
            :listing_id,
            :body,
            :cleanliness,
            :communication,
            :check_in,
            :accuracy,
            :location,
            :value
        )
    end
end
