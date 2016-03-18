class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :twitter
      t.string :skype
      t.string :phone
      t.string :email
      t.string :address
      t.text :notes
      t.string :image_url
      t.boolean :favorite
      t.string :status

      t.timestamps null: false
    end
  end
end
