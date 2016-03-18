class Contact < ActiveRecord::Base
  include AASM

  validates :email, :status, :presence => true

  aasm column: :status do
    state :active, :initial => true
    state :disabled
  end

  def status_enum
    [:active, :disabled]
  end
end
