class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :source
      t.string :name
      t.string :caption
      t.integer :likes

      t.timestamps
    end
  end
end
