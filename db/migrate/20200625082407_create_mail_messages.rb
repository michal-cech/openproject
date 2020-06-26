class CreateMailMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :mail_messages do |t|
      t.string :address_to
      t.string :subject
      t.text :content
      t.references :work_package, foreign_key: true

      t.timestamps
    end
  end
end
