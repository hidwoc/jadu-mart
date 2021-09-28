# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "\n#{Basket.count} baskets destroyed!"

Basket.destroy_all
Price.destroy_all
Dish.destroy_all
User.destroy_all

# Users
admin = User.create!(username: 'hidwoc', email: 'hid@woc.com', password: 'banchan', is_admin: true)

puts "#{User.count} users created!"

# Dishes
vegan_kimchi = Dish.create!(name: 'vegan kimchi', description: '', img_url: '', inventory: 10 )
kimchi = Dish.create!(name: 'kimchi', description: 'Napa cabbages and radish fermented for spicy, umami perfection. Reduces cholesterol and inflammation. Packed with vitamins, mineral and antioxidants. Your gut will thank you!', img_url: '/assets/images/Kimchi.jpg', inventory: 20)
jalapenos = Dish.create!(name: 'pickled jalapeños', description: 'Spicy and sweet jalapeños and garlic pickled in soy sauce. The perfect dipping sauce AND the perfect condiment in one jar.', img_url: '/assets/images/PickledJalapenos.jpg', inventory: 15)
beans = Dish.create!(name: 'braised black beans', description: 'Sweet and slightly nutty, black beans promote a healthy complexion. These stay in the fridge and pair great with rice or beer.', img_url: '/assets/images/Beans.jpg', inventory: 15)
seaweed = Dish.create!(name: 'sautéed seaweed stems', description: 'Seaweed is high in calcium, iodine, vitamins and minerals. These stems are sautéed with onion and garlic for cruncy and chewy goodness. Can be eaten warm or cold.', img_url: '/assets/images/Seaweed.jpg', inventory: 10)

puts "#{Dish.count} dishes created!"

# Prices
Price.create!(quantity: 16, price: 15, dish: kimchi)
Price.create!(quantity: 16, price: 15, dish: jalapenos)
Price.create!(quantity: 16, price: 15, dish: beans)
Price.create!(quantity: 16, price: 15, dish: seaweed)
Price.create!(quantity: 8, price: 8, dish: kimchi)
Price.create!(quantity: 8, price: 8, dish: jalapenos)
Price.create!(quantity: 8, price: 8, dish: beans)
Price.create!(quantity: 8, price: 8, dish: seaweed)
Price.create!(quantity: 4, price: 4, dish: kimchi)
Price.create!(quantity: 4, price: 4, dish: jalapenos)
Price.create!(quantity: 4, price: 4, dish: beans)
Price.create!(quantity: 4, price: 4, dish: seaweed)
Price.create!(quantity: 16, price: 16, dish: vegan_kimchi)
Price.create!(quantity: 8, price: 8.5, dish: vegan_kimchi)
Price.create!(quantity: 4, price: 4.25, dish: vegan_kimchi)

puts "#{Price.count} prices created!"

# LineItems will be created once a dish is added to a basket

# Basket
# Basket will be created on App mount and will persist throughout a session with state
# Submitting an order will destroy the basket and create a new one
# Basket will get destroyed on App unmount