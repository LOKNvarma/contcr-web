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
    id: 1,
    title: "Aqua Luxe Estate",
    type: "Residential",
    owner: "Mr. Yashwant Singh Chouhan ",
    date: "2022",
    image:"https://res.cloudinary.com/dgkflajty/image/upload/v1738559130/openart-54d89cc3-3ab2-4788-abeb-28cd3d05f0d1_tkfssy.jpg",
    Rimage : "https://res.cloudinary.com/dgkflajty/image/upload/v1738560229/openart-b9ff00a1-afc7-441c-bd13-d984ad0b5a7c_yevk8t.jpg",

    feedback: "Exceptional attention to detail and timely delivery. The team's professionalism exceeded our expectations.",
    description: "A 3000 sq ft modern villa , infinity pool, and sustInainable materials.",
    location  : "Shree Ram Colony , Gogawan, khargone ",
    images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
               "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
                "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg"] ,
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
    feedback: "Work quality is amazing ,  very polite and trustable contrator  ",
    description: "The completion of this stunning modern house is a true reflection of elegance and functionality. Every detail has been meticulously crafted to bring comfort and luxury to life.",
     location  : "Kharda - Gogawan, khargone ",
     images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
       "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg"] ,
      format : "jpg"
    }
   
  },
  {
    id: 3,
    title: "Green Valley Residences",
    type: "Multi-Family",
    owner: "Green Development LLC",
    date: "2023",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    feedback: "उनके साथ काम करना एक सहज अनुभव था। उन्होंने हमारी उम्मीदों से कहीं बढ़कर काम किया।",
    description: "Luxury apartment complex with 200 units, featuring eco-friendly design and community amenities.",
     location  : "Borgav-gogawan ,khargone ",
     images : {
      pics : ["https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
       "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg",
        "https://res.cloudinary.com/dgkflajty/image/upload/v1738513217/jituji_pqufyg.jpg"] ,
      format : "jpg"
    }
  },
 
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Developer",
    quote: "Their commitment to excellence and attention to detail is unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    quote: "Working with them was a seamless experience. They delivered beyond our expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];