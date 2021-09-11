class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :source
      t.string :name
      t.string :caption
      t.integer :likes

      t.timestamps
    end
  end
end
