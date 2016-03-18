class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :twitter, :skype, :email, :phone,
    :address, :notes, :favorite, :image_url, :status, :created_at, :updated_at
end
