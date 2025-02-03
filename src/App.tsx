
import { ArrowRight, Award, Building2, Clock, Home, Mail, MapPin, Phone, Shield, Star, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import { projects, testimonials } from './data/projects';
import { Form, Link } from "react-router-dom";
import image from './assets/h2.png'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${image}` }
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        
        <div className="relative mt-24 z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl  [text-shadow:_2px_2px_0_rgb(0_0_0)] font-bold mb-6 animate-fade-in">
            Building Dreams Into Reality
          </h1>
          <p className="text-xl text-gray-700 [text-shadow:_2px_2px_0_rgb(128_128_128)] md:text-2xl whitespace-normal mt-50 mb-8 max-w-2xl mx-auto">
            Excellence in construction with over 20 years of experience in creating architectural masterpieces
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold mt-10 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Quality Guaranteed", desc: "Highest standards in construction" },
              { icon: Clock, title: "On-Time Delivery", desc: "We value your time" },
              { icon: Award, title: "Award Winning", desc: "Recognition for excellence" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
               <Link to={`/projects/${project.id}`} key={project.id}>
               <div className="bg-white rounded-xl  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-48 object-fill"
                 />
                 <div className="p-6">
                   <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                   <p className="text-gray-600 mb-4">{project.description}</p>
                 </div>
               </div>
             </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to start your next project? Contact us today for a consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span> 6261016685</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span>lokenvarma4@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <span> Gogawan Khargone, pin - 451335</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold"> DConstruction</span>
              </div>
              <p className="text-gray-400">
                Building excellence, delivering dreams, creating lasting impressions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li> 451335 Gogawan , khargone</li>
                <li>Main circle , Gogawan</li>
                <li>Phone: +91  6261016685</li>
                <li>Email: lokenvarma4@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DC builders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;