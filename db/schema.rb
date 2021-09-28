# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_11_235640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "baskets", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.integer "inventory", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "line_items", force: :cascade do |t|
    t.bigint "dish_id", null: false
    t.bigint "basket_id", null: false
    t.bigint "order_id", null: false
    t.bigint "price_id", null: false
    t.integer "quantity", default: 1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["basket_id"], name: "index_line_items_on_basket_id"
    t.index ["dish_id"], name: "index_line_items_on_dish_id"
    t.index ["order_id"], name: "index_line_items_on_order_id"
    t.index ["price_id"], name: "index_line_items_on_price_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "name", null: false
    t.string "address"
    t.string "phone"
    t.string "message"
    t.string "email"
    t.string "allergies"
    t.boolean "delivery"
    t.string "payment_method"
    t.string "payment_info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prices", force: :cascade do |t|
    t.bigint "dish_id", null: false
    t.integer "quantity"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dish_id"], name: "index_prices_on_dish_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "line_items", "baskets"
  add_foreign_key "line_items", "dishes"
  add_foreign_key "line_items", "orders"
  add_foreign_key "line_items", "prices"
  add_foreign_key "prices", "dishes"
end
