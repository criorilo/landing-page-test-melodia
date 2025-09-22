import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Input } from './components/ui/input'
import { Volume2, Smartphone, ListMusic, Search, Menu, X, Star, Mail, Phone, MapPin } from 'lucide-react'
import './App.css'
import heroPhone from './assets/hero-phone.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const benefits = [
    {
      icon: Volume2,
      title: "Qualidade de Som Superior",
      description: "Experimente música com qualidade de áudio excepcional e tecnologia de ponta."
    },
    {
      icon: Smartphone,
      title: "Interface Intuitiva",
      description: "Design moderno e fácil de usar, pensado para uma experiência fluida."
    },
    {
      icon: ListMusic,
      title: "Playlists Personalizadas",
      description: "Crie e organize suas playlists favoritas de forma simples e rápida."
    },
    {
      icon: Search,
      title: "Descoberta de Novos Artistas",
      description: "Encontre novos talentos e expanda seu repertório musical constantemente."
    }
  ]

  const features = [
    {
      title: "Streaming de Alta Qualidade",
      description: "Ouça suas músicas favoritas com qualidade de áudio superior, sem interrupções."
    },
    {
      title: "Modo Offline",
      description: "Baixe suas músicas e ouça onde estiver, mesmo sem conexão com a internet."
    },
    {
      title: "Recomendações Inteligentes",
      description: "Algoritmo avançado que aprende seus gostos e sugere músicas perfeitas para você."
    }
  ]

  const testimonials = [
    {
      name: "Ana Silva",
      text: "O Melodia revolucionou minha forma de ouvir música. A qualidade é incrível!",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Carlos Santos",
      text: "Interface super intuitiva e as recomendações são sempre certeiras.",
      rating: 5,
      avatar: "CS"
    },
    {
      name: "Maria Oliveira",
      text: "Descobri tantos artistas novos através do app. Simplesmente perfeito!",
      rating: 5,
      avatar: "MO"
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Melodia</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                  Benefícios
                </button>
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                  Funcionalidades
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contato
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">
                Benefícios
              </button>
              <button onClick={() => scrollToSection('features')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">
                Funcionalidades
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium w-full text-left">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Melodia: <span className="text-indigo-600">Sua Música,</span>
                <br />
                <span className="text-pink-500">Sua Forma</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Descubra uma nova forma de experimentar música. Com qualidade superior, 
                interface intuitiva e descobertas musicais personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
                  Ouvir Agora
                </Button>
                <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={heroPhone} 
                  alt="Melodia App Interface" 
                  className="w-80 h-auto drop-shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Melodia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma experiência musical única com recursos pensados especialmente para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos avançados que tornam sua experiência musical ainda melhor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milhares de pessoas já descobriram uma nova forma de ouvir música
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Newsletter Section */}
      <section id="contact" className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Cadastre-se para receber atualizações sobre novos recursos e artistas exclusivos
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-white border-white text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                Cadastrar
              </Button>
            </div>
            <p className="text-indigo-100 text-sm mt-4 text-center">
              Não enviamos spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Melodia</h3>
              <p className="text-gray-300 mb-4">
                Sua música, sua forma. Descubra uma nova experiência musical com qualidade superior e descobertas personalizadas.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  Twitter
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Início</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white">Benefícios</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white">Funcionalidades</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white">Depoimentos</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-gray-300">contato@melodia.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-gray-300">(11) 9999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-gray-300">São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Melodia. Todos os direitos reservados. | 
              <button className="text-indigo-400 hover:text-indigo-300 ml-1">Política de Privacidade</button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
