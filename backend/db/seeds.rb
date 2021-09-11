# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.create(name: 'Essay on Cats', text: 'Essay on CatsEssay on CatsEssay on CatsEssay on CatsEssay on Cats', likes: 1)
Post.create(name: 'A Dream About Summer', text: 'A Dream About SummerA Dream About SummerA Dream About SummerA Dream About SummerA Dream About Summer', likes: 1)
Post.create(name: 'First Day of School: I Hated It', text: 'First Day of School: I Hated ItFirst Day of School: I Hated ItFirst Day of School: I Hated ItFirst Day of School: I Hated ItFirst Day of School: I Hated It', likes: 1)


Image.create(name: "Van Gogh's Sunflowers", source: "www.vangogh.com/sunflowers", caption: 'Acrylic on Canvas', likes: 2)
Image.create(name: "The Sistine Chapel", source: "www.sistinechapel.com", caption: "Michelangelo's greatest work", likes: 2)
Image.create(name: "Van Gogh's Self Portratir", source: "www.vangogh.com/self-portrait", caption: 'Acrylic on Canvas', likes: 2)

Video.create(name: 'Art Explained: The Garden of Earthly Delights', source: 'www.youtube.com/garden', likes: 3)
Video.create(name: 'Art Explained: Basquiat', source: 'www.youtube.com/basquiat', likes: 3)