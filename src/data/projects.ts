import photo from '../assets/mhesh.png'
import p1 from '../assets/jituji.jpg'
export interface Project {
  id: number;
  title: string;
  type: string;
  owner: string;
  date: string; // Consider using Date type if parsing is needed
  image: string;
  Rimage : string ;
  feedback: string;
  description: string;
  location: string;
  images: {
    pics: string[]; // Defined type
    format: string; // More descriptive name instead of 'type'
  };
}

export const projects = [

  {
    id: 3,
    title: "luxurious, classical-style mansion with grand architectural features",
    type: "Residential",
    owner: "Mr. Ajay singh",
    date: "2024",
    image: "https://res.cloudinary.com/dgkflajty/image/upload/v1738593642/A77p06__iwsm69.jpg",
    Rimage : "https://res.cloudinary.com/dgkflajty/image/upload/v1738593909/876054ec-75a6-4a7e-828e-e180dc0cceeb_pvcuxb.jpg",
    feedback: "Brilliant Team",
    description: "Luxury residentail villa with 2500 square feet.",
     location  : "Bilkhed-khurd ,gogawan ,khargone ",
     images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738586441/722205ba-7af3-4d98-895d-1db5db6749d6_n3jhoo.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738585945/cc9080fe-2b7b-46f0-a038-341cd25e3be1_agj4h8.jpg",
               "https://res.cloudinary.com/dgkflajty/image/upload/v1738587073/a238128d-efc4-41f2-9264-f4a5665955c9_lodc8y.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738587289/9d73fc42-4883-41ab-81ba-fb7e6cb4abdd_w7zynf.jpg"] ,
      format : "jpg"
    }  
  },
  {
    id: 1,
    title: "Aqua Luxe Estate",
    type: "Residential",
    owner: "Mr. Yashwant Singh Chouhan ",
    date: "2022",
    image:"https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",
    Rimage : "https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",

    feedback: "Exceptional attention to detail and timely delivery. The team's professionalism exceeded our expectations.",
    description: "A 3000 sq ft modern villa , infinity pool, and sustInainable materials.",
    location  : "Shree Ram Colony , Gogawan, khargone ",
    images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",
               "https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg"] ,
      format : "jpg"
    }   
  },
  {
    id: 2,
    title: "A high-end, spacious home with elegant exterior lighting and lush greenery.",
    type: "Residential House",
    owner: "Mr. Jituji Yadav (JITU SARKAR)",
    date: "2021",
    image:"https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg",
    Rimage:"https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg",
    feedback: "Work quality is amazing ,  very polite and trustable contrator  ",
    description: "The completion of this stunning modern house is a true reflection of elegance and functionality. Every detail has been meticulously crafted to bring comfort and luxury to life.",
     location  : "Kharda - Gogawan, khargone ",
     images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg",
       "https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738558422/openart-c955818f-5b47-40b5-b991-ff0bea0a9400_xi1uz5.jpg"] ,
      format : "jpg"
    }
   
  },
 
];

export const testimonials = [
  {
    id: 1,
    name: "Mr. Gajran Singh Chouhan",
    role: "Building Owner",
    quote: "Their commitment to excellence and attention to detail is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Mr. Anuj Agrawal",
    role: "Architecture/Engineering",
    quote: "Working with them was a seamless experience. They delivered beyond our expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];