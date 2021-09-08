class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :fullname
      t.text :description

      t.timestamps
    end
  end
end
