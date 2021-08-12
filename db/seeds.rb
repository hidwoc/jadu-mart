# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.destroy_all

# Users
# admin = User.create!(username: 'hidwoc', email: 'heidischoi@gmail.com', password: 'banchan') # is_admin: true

# Dishes
kimchi = Dish.create!(name: 'kimchi', description: '16oz - Napa cabbages and radish fermented for spicy, umami perfection. Reduces cholesterol and inflammation. Packed with vitamins, mineral and antioxidants. Your gut will thank you!', img_url: 'assets/dishes_images/Kimchi.jpg', price: 15, in_stock: 20)
jalapenos = Dish.create!(name: 'pickled jalapeños', description: '8oz - Spicy and sweet jalapeños and garlic pickled in soy sauce. The perfect dipping sauce AND the perfect condiment in one jar.', img_url: 'assets/dishes_images/PickledJalapenos.jpg', price: 8, in_stock: 15)
beans = Dish.create!(name: 'braised black beans', description: '4oz - Sweet and slightly nutty, black beans promote a healthy complexion. These stay in the fridge and pair great with rice or beer.', img_url: 'assets/dishes_images/Beans.jpg', price: 4, in_stock: 15)
seaweed = Dish.create!(name: 'sautéed seaweed stems', description: '4oz - Seaweed is high in calcium, iodine, vitamins and minerals. These stems are sautéed with onion and garlic for cruncy and chewy goodness. Can be eaten warm or cold.', img_url: 'assets/dishes_images/Seaweed.jpg', price: 4, in_stock: 10)

pp "#{Dish.count} dishes created!"

# LineItems will be created once a dish is added to a basket

# Basket will be created each session and will persist throughout a session with state
# Submitting an order will destroy the basket and create a new one