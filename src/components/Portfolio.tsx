import { Mail, Phone, MapPin, Globe, Github, Linkedin, User, Briefcase, GraduationCap, Award, Palette, Code, Target, Users, BarChart3, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header/Hero Section */}
      <header className="bg-gradient-primary shadow-elegant">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Danitza Cerna</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Diseñadora Gráfica | UX/UI & Product Owner</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>danitza.cerna.a@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+569 95713674</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Santiago, Chile</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Behance
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Professional Profile */}
        <section>
          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <User className="w-6 h-6 text-primary" />
                Perfil Profesional
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Diseñadora Gráfica Profesional titulada del Instituto Profesional Inacap con enfoque en la comunicación digital y 
                especialización en UX/UI. Experiencia en programación web orientada a la publicidad y administración comercial. Destaco en marketing, 
                diseño y comunicaciones. Mi dominio de herramientas me ha permitido crear piezas gráficas que fortalecen la identidad 
                visual de las marcas y generan conexiones significativas con las audiencias. Abordo cada proyecto con entusiasmo y dedicación, 
                me desenvuelvo con facilidad en entornos colaborativos y adapto mis ideas de manera profesional y creativa en cada trabajo.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Featured Project */}
        <section>
          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                Proyecto Destacado
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-gradient-to-br from-lilac-light/20 to-primary/10 p-6 rounded-lg border border-lilac-light/30">
                <h3 className="text-xl font-bold mb-2 text-primary">Calculadora de Ahorro Energético – LuzViva</h3>
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Bootcamp Product Owner</Badge>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Rol: Product Owner
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Proyecto grupal enfocado en desarrollar una funcionalidad que permitiera a los usuarios calcular su ahorro energético 
                      mediante el uso de paneles solares.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Responsabilidades
                    </h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Definición de la visión del producto</li>
                      <li>• Creación del Product Backlog</li>
                      <li>• Priorización de historias de usuario</li>
                      <li>• Diseño de un MVP validable</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Resultados
                  </h4>
                  <p className="text-muted-foreground">
                    MVP funcional con retroalimentación positiva. Se diseñó roadmap de 8 semanas y se utilizaron métricas como 
                    activación y NPS para validar impacto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section>
          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Briefcase className="w-6 h-6 text-primary" />
                Experiencia Laboral
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">
              {/* Freelance Designer */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Diseñadora Freelance</h3>
                  <Badge variant="outline">Mar. 2018 - Actualidad</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Diseñadora independiente</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Genero piezas gráficas para diferentes clientes</li>
                  <li>• Desarrollo de identidad visual y branding, diseño publicitario y editorial</li>
                  <li>• Logro: Mejorar y fortalecer la identidad visual de Pymes, aumentando su presencia en redes sociales</li>
                </ul>
              </div>

              {/* BrandBits */}
              <div className="border-l-4 border-lilac-dark pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Diseñadora gráfica Jr</h3>
                  <Badge variant="outline">Dic. 2022 - Ene. 2023</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">BrandBits agencia de marketing</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Conceptualización, diseño y actualización de imagen de marca de la agencia</li>
                  <li>• Diseño y desarrollo de publicaciones para redes sociales, homepage y presentaciones corporativas</li>
                  <li>• Logro: Uso actual de la imagen de marca de la agencia, impulsando su identidad visual y aumentando su reconocimiento positivo en el mercado</li>
                </ul>
              </div>

              {/* ProChile */}
              <div className="border-l-4 border-lilac-dark pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Practicante Diseño gráfico</h3>
                  <Badge variant="outline">May. 2022 - Jul. 2022</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">ProChile Ministerio de Relaciones Exteriores</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Diseño y desarrollo de piezas gráficas para los diferentes departamentos del área de marketing y comunicación</li>
                  <li>• Apoyo gráfico en POP y folletería</li>
                  <li>• Logro: Generar, facilitar y apoyar, eficientemente la creación de piezas gráficas que contribuyeron al cumplimiento exitoso de diversos proyectos en tiempos acotados</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education & Courses */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                Educación
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Diseñadora Gráfica Profesional</h3>
                  <p className="text-sm text-muted-foreground">Instituto Profesional INACAP</p>
                  <Badge variant="outline" className="mt-1">2018 - 2021</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                Cursos y Diplomados
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Curso Diseño de Experiencia de Usuario UX de Google</h4>
                  <p className="text-xs text-muted-foreground">Beca Talento digital y Coursera</p>
                  <Badge variant="outline" className="mt-1 text-xs">Jun. 2023 - Actualidad</Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Bootcamp Diseño UX/UI</h4>
                  <p className="text-xs text-muted-foreground">Talento digital, Awakelab by Adalid</p>
                  <Badge variant="outline" className="mt-1 text-xs">Abr. 2023 - Sep. 2023</Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Diplomado de diseño y programación web</h4>
                  <p className="text-xs text-muted-foreground">Conecta Empleo de Fundación Movistar, SENCE y AIEP</p>
                  <Badge variant="outline" className="mt-1 text-xs">Oct. 2022 - Nov. 2022</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section>
          <Card className="shadow-card border-lilac-light/30">
            <CardHeader className="bg-gradient-to-r from-lilac-light/30 to-transparent">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Palette className="w-6 h-6 text-primary" />
                Habilidades y Herramientas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Software
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Adobe Illustrator</span>
                      <Badge variant="secondary" className="text-xs">Avanzado</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Adobe Photoshop</span>
                      <Badge variant="secondary" className="text-xs">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Adobe Figma</span>
                      <Badge variant="secondary" className="text-xs">Intermedio</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Visual Studio Code</span>
                      <Badge variant="secondary" className="text-xs">Básico</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Tecnologías
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">HTML5</span>
                      <Badge variant="secondary" className="text-xs">Básico</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CSS3</span>
                      <Badge variant="secondary" className="text-xs">Básico</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bootstrap</span>
                      <Badge variant="secondary" className="text-xs">Básico</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Idiomas
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inglés</span>
                      <Badge variant="secondary" className="text-xs">A2</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2024 Danitza Cerna. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
            <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;