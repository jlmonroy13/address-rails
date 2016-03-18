class ContactsSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :favorite,
    :image_url, :status, :created_at, :updated_at
end
