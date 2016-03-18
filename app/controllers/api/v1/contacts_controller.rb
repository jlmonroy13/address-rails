class Api::V1::ContactsController < ApplicationController
  respond_to :json

  def index
    respond_with :api, Contact.all(), each_serializer: ContactsSerializer
  end

  def show
    load_contact
    respond_with :api, @contact
  end

  def create
    build_contact
    save_contact
    respond_with :api, @contact
  end

  def update
    load_contact
    build_contact
    save_contact
    respond_with :api, @contact
  end

  def destroy
    load_contact
    @contact.destroy
    respond_with :api, @contact
  end

  private

  def load_contact
    @contact = Contact.find(params[:id])
  end

  def build_contact
    @contact ||= Contact.new
    @contact.attributes = contact_params
  end

  def save_contact
    @contact.save
    @contact
  end

  def contact_params
    contact_params = params[:contact]
    contact_params ? contact_params.permit(:first_name, :last_name, :twitter, :skype, :email, :phone,
      :address, :notes, :favorite, :image_url) : {}
  end
end
