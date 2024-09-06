'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Github, Linkedin, Mail, Code2, Database, Server } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    { 
      name: "E-commerce API", 
      description: "RESTful API for a scalable e-commerce platform", 
      icon: <Database className="w-8 h-8" />,
      technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "Redis"]
    },
    { 
      name: "Task Management System", 
      description: "Microservices-based task management solution", 
      icon: <Server className="w-8 h-8" />,
      technologies: ["Spring Boot", "Spring Cloud", "MongoDB", "RabbitMQ"]
    },
    { 
      name: "Auth Service", 
      description: "Secure authentication and authorization service", 
      icon: <Code2 className="w-8 h-8" />,
      technologies: ["Spring Security", "JWT", "OAuth 2.0", "Keycloak"]
    },
    { 
      name: "Real-time Analytics Engine", 
      description: "High-performance data processing and analytics system", 
      icon: <Database className="w-8 h-8" />,
      technologies: ["Spring Boot", "Apache Kafka", "Elasticsearch", "Grafana"]
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-black z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center space-y-8 mt-20">
                <a href="#about" className="text-2xl" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#projects" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#skills" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#contact" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Spring Boot Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Crafting robust, scalable backend solutions with Spring Boot and microservices architecture.
            </motion.p>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h4 className="text-2xl font-semibold ml-4">{project.name}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-black hover:underline">
                    View Project <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Spring Boot", "Spring Cloud", "Java", "Kotlin",
                "Microservices", "RESTful APIs", "GraphQL",
                "JPA / Hibernate", "MySQL", "PostgreSQL", "MongoDB",
                "Redis", "Apache Kafka", "RabbitMQ",
                "Docker", "Kubernetes", "CI/CD", "Git",
                "JUnit", "Mockito", "Swagger", "Postman"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
            <p className="text-xl mb-8">Interested in collaborating or have a project in mind? Let's connect.</p>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}