module Api
    module V1
        class HousesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                houses = House.all

                render json: HouseSerializer.new(houses).serialized_json
            end
            def show
                house = House.find_by(slug: params[:slug])

                render json: HouseSerializer.new(house).serialized_json
            end
            def create
                house = House.new(house_params)

                if house.save
                    render json: HouseSerializer.new(house).serialized_json
                else
                    render json: { error: airline.errors.messages }, status: 422
                end
            end

            private
            def house_params
                params.require(:house).permit(:name, :image_url)
            end
        end
    end
end