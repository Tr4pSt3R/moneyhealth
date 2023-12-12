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

ActiveRecord::Schema[7.1].define(version: 2023_12_11_211414) do
  create_table "cashflows", force: :cascade do |t|
    t.string "title"
    t.integer "amount"
    t.bigint "cashflow_id"
    t.string "cashflow_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cashflow_type", "cashflow_id"], name: "index_cashflows_on_cashflow_type_and_cashflow_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_customers_on_email", unique: true
    t.index ["reset_password_token"], name: "index_customers_on_reset_password_token", unique: true
  end

  create_table "expenditures", force: :cascade do |t|
    t.string "title"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "incomes", force: :cascade do |t|
    t.string "title"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statements", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "customer_id"
    t.string "cashflow_type"
    t.integer "cashflow_id"
    t.index ["cashflow_type", "cashflow_id"], name: "index_statements_on_cashflow"
    t.index ["customer_id"], name: "index_statements_on_customer_id"
  end

  add_foreign_key "statements", "customers"
end
