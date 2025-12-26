import React from 'react';

const categories = [
  {
    name: 'Music',
    image: 'https://i.ibb.co.com/nq3fFws6/fest.jpg',
  },
  {
    name: 'Sports',
    image: 'https://c8.alamy.com/comp/J9XP51/excited-crowd-of-people-at-athletics-stadium-athletics-arena-ceremony-J9XP51.jpg',
  },
  {
    name: 'Tech',
    image: 'https://media.wired.com/photos/65dcdce83181ba46e9f8e1ec/4:3/w_2400,h_1800,c_limit/Cool-Stuff-at-MWC-2-Gear.jpg',
  },
  {
    name: 'Business',
    image: 'https://crminsights.co.uk/wp-content/uploads/2023/03/how-to-do-business-networking.jpg',
  },
];

const CategoryCard = () => {
  return (
    <section className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Event Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card relative overflow-hidden rounded-xl  hover:scale-105 transition-transform duration-300   bg-gradient-to-br from-primary to-secondary shadow-xl"
          >
            <figure className="h-48 w-full">
              <img
                src={category.image}
                alt={`${category.name} event`}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <button className="btn btn-primary btn-sm">Explore Events</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCard;