class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.integer :age
      t.string :document
      t.integer :phone
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end
