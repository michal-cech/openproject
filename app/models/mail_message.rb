class MailMessage < ApplicationRecord
  validates :address_to, presence: true
  belongs_to :work_package
end
