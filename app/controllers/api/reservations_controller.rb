class Api::ReservationsController < ApplicationController
    before_action :set_reservation, only: [:show, :update, :destroy]

    def index
        # @reservations = Reservation.all
        # only show the reservations where the current user matches the reserver
        @reservations = Reservation.where(reserver_id: current_user.id)
    end

    def show
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation.destroy
        head :no_content # return header only
    end


    private
    def set_reservation
        @reservation = Reservation.find(params[:id])
    rescue
        render json: ['Reservation not found'], status: :not_found
    end

    def reservation_params
        params.require(:reservation).permit(
            :reserver_id,
            :listing_id,
            :check_in_date,
            :check_out_date,
            :num_guests
        )
    end
end
