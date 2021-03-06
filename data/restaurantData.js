import { icons, images } from "../constants";

export const initialCurrentLocation = {
  streetName: "Garden City Mall",
  coords: {
    latitude: 31.761428628192558,
    longitude: 34.65244825203462,
  },
};

export const categoryData = [
  {
    id: 1,
    name: "אוכל מבושל",
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    name: "כריכים",
    icon: icons.hotdog,
  },
  {
    id: 3,
    name: "פירות וירקות",
    icon: icons.banana,
  },
  {
    id: 4,
    name: "חטיפים",
    icon: icons.fries,
  },
  {
    id: 5,
    name: "חטיפים",
    icon: icons.donut,
  },
  {
    id: 6,
    name: "שתייה",
    icon: icons.drink,
  },
];

// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;

export const restaurantData = [
  {
    id: 1,
    name: "המבורגרים",
    categories: [5, 7],
    photo: images.burger_restaurant,
    duration: "30 - 45 דק",
    location: {
      latitude: 32.0167,
      longitude: 34.7667,
    },
    description:
      "יש לנו הרבה אוכל שנשאר לנו ואנחנו ממש רוצים לתת אשמח אם תיצרו איתנו קשר",
    contact: {
      avatar: images.avatar_2,
      name: "עידן לזר",
      phone: "+972548370965",
    },
  },
  {
    id: 2,
    name: "Chancelot Pizza",
    rating: 4.8,
    categories: [2, 4, 6],
    priceRating: expensive,
    photo: images.pizza_restaurant,
    duration: "15 - 20 דק",
    location: {
      latitude: -1.213126,
      longitude: 36.839998,
    },
    contact: {
      avatar: images.avatar_2,
      name: "Jackson",
    },
    menu: [
      {
        menuId: 4,
        name: "Hawaiian Pizza",
        photo: images.hawaiian_pizza,
        description: "Canadian bacon, homemade pizza crust, pizza sauce",
        calories: 250,
        price: 15,
      },
      {
        menuId: 5,
        name: "Tomato & Basil Pizza",
        photo: images.pizza,
        description:
          "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        calories: 250,
        price: 20,
      },
      {
        menuId: 6,
        name: "Tomato Pasta",
        photo: images.tomato_pasta,
        description: "Pasta with fresh tomatoes",
        calories: 100,
        price: 10,
      },
      {
        menuId: 7,
        name: "Mediterranean Chopped Salad ",
        photo: images.salad,
        description: "Finely chopped lettuce, tomatoes, cucumbers",
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Chancelot Hotdogs",
    rating: 4.8,
    categories: [3],
    priceRating: expensive,
    photo: images.hot_dog_restaurant,
    duration: "20 - 25 דק",
    location: {
      latitude: -1.301789,
      longitude: 36.825724,
    },
    contact: {
      avatar: images.avatar_3,
      name: "James",
    },
    menu: [
      {
        menuId: 8,
        name: "Chicago Style Hot Dog",
        photo: images.chicago_hot_dog,
        description: "Fresh tomatoes, all beef hot dogs",
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: "Chancelot Sushi",
    rating: 4.8,
    categories: [8],
    priceRating: expensive,
    photo: images.japanese_restaurant,
    duration: "10 - 15 דק",
    location: {
      latitude: -1.316393,
      longitude: 36.834484,
    },
    contact: {
      avatar: images.avatar_4,
      name: "Ahmad",
    },
    menu: [
      {
        menuId: 9,
        name: "Sushi sets",
        photo: images.sushi,
        description: "Fresh salmon, sushi rice, fresh juicy avocado",
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    id: 5,
    name: "Chancelot Cuisine",
    rating: 4.8,
    categories: [1, 2],
    priceRating: affordable,
    photo: images.noodle_shop,
    duration: "15 - 20 דק",
    location: {
      latitude: -1.312301,
      longitude: 36.816861,
    },
    contact: {
      avatar: images.avatar_4,
      name: "Muthu",
    },
    menu: [
      {
        menuId: 10,
        name: "Kolo Mee",
        photo: images.kolo_mee,
        description: "Noodles with char siu",
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: "Sarawak Laksa",
        photo: images.sarawak_laksa,
        description: "Vermicelli noodles, cooked prawns",
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: "Nasi Lemak",
        photo: images.nasi_lemak,
        description: "A traditional Malay rice dish",
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: "Nasi Briyani with Mutton",
        photo: images.nasi_briyani_mutton,
        description: "A traditional Indian rice dish with mutton",
        calories: 300,
        price: 8,
      },
    ],
  },
  {
    id: 6,
    name: "Chancelot Dessets",
    rating: 4.9,
    categories: [9, 10],
    priceRating: affordable,
    photo: images.kek_lapis_shop,
    duration: "35 - 40 דק",
    location: {
      latitude: -1.343406,
      longitude: 36.764942,
    },
    contact: {
      avatar: images.avatar_1,
      name: "Jessie",
    },
    menu: [
      {
        menuId: 12,
        name: "Teh C Peng",
        photo: images.teh_c_peng,
        description: "Three Layer Teh C Peng",
        calories: 100,
        price: 2,
      },
      {
        menuId: 13,
        name: "ABC Ice Kacang",
        photo: images.ice_kacang,
        description: "Shaved Ice with red beans",
        calories: 100,
        price: 3,
      },
      {
        menuId: 14,
        name: "Kek Lapis",
        photo: images.kek_lapis,
        description: "Layer cakes",
        calories: 300,
        price: 20,
      },
    ],
  },
];

export default {
  restaurantData,
  initialCurrentLocation,
  categoryData,
};
