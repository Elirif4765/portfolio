import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Shield,
  Palette,
  Award,
  Briefcase,
  Trophy,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Utsav Arora</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Cybersecurity Enthusiast • Programmer • Digital Artist
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            BCA student at Lovely Professional University with a specialized focus on Cybersecurity. I have an inherent
            pull towards creativity and design, constantly seeking opportunities to learn and grow. My journey combines
            technical expertise with artistic vision, creating a unique perspective in the world of technology.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I take every opportunity that presents itself in my day-to-day life and try to learn the most out of it.
            Whether it's mastering new programming languages, exploring cybersecurity concepts, or creating digital art,
            I approach each challenge with curiosity and determination.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:utsavarora4765@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+916376383921" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/utsavarora4765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Elirif4765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My technical skill set spans multiple domains, from low-level programming languages to creative digital
                arts. Each skill represents countless hours of practice and real-world application through projects and
                professional experience.
              </p>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Code className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Proficient in systems programming and algorithm development
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">C/C++</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <ExternalLink className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Frontend development with focus on clean, responsive design
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <CardTitle>Database Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experienced in relational database design and optimization
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">MySQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Palette className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <CardTitle>Creative Arts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Combining technical skills with artistic vision and creativity
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">Digital Art</Badge>
                    <Badge variant="secondary">Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From my first semester at LPU to advanced Python programming, each project represents a milestone in my
              learning journey. These projects showcase my progression from basic programming concepts to complex system
              design and team collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Large featured project */}
            <Card className="lg:col-span-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="w-6 h-6 text-accent" />
                  Custom Programming Language
                </CardTitle>
                <CardDescription>Python • Advanced Language Design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  An ambitious project where I built a custom programming language using Python that resembles
                  Assembly-level language. This project demonstrates deep understanding of language design, parsing,
                  interpretation, and low-level programming concepts. It represents a significant milestone in my
                  programming expertise and showcases my ability to tackle complex theoretical concepts.
                </p>
              </CardContent>
            </Card>

            {/* Smaller projects */}
            <div className="lg:col-span-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent" />
                    Word Guessing Game
                  </CardTitle>
                  <CardDescription>C Programming • First Semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    My first major programming project that sparked my passion for software development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent" />
                    Venn Diagram Calculator
                  </CardTitle>
                  <CardDescription>C Programming • Mathematical</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sophisticated set-theory application combining math with programming logic.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Medium projects */}
            <Card className="lg:col-span-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Sports Registration System
                </CardTitle>
                <CardDescription>C++ • Collaborative Team Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A comprehensive sports player registration system developed collaboratively with my team. This project
                  showcases object-oriented programming principles in C++, database integration, and team coordination
                  skills. It handles player data management, registration workflows, and administrative functions.
                </p>
              </CardContent>
            </Card>

            <Card className="lg:col-span-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Helsinki MOOC Mastery
                </CardTitle>
                <CardDescription>Python • Comprehensive Problem Solving</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Successfully completed all challenging exercises from Helsinki University's renowned Python
                  Programming MOOC. Each exercise could be considered a project in itself, covering advanced topics like
                  data structures, algorithms, and complex problem-solving scenarios.
                </p>
              </CardContent>
            </Card>

            {/* Hackathon project spanning full width */}
            <Card className="lg:col-span-12 bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Trophy className="w-6 h-6 text-accent" />
                  Movie Recommender System
                </CardTitle>
                <CardDescription>Code-a-Haunt 2.0 • Machine Learning Challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Developed during Code-a-Haunt 2.0 hackathon with my team, this ambitious project aimed to create a
                  movie recommendation system using large datasets and machine learning algorithms. Although we couldn't
                  complete it within the time limit, it was an invaluable experience in team collaboration, pressure
                  handling, and working with big data. This challenge pushed our limits and taught us valuable lessons
                  about project scoping and time management in competitive environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificates & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These certifications represent my commitment to continuous learning and excellence. Each achievement
              reflects dedicated effort and mastery of specific skills that contribute to my professional development.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <Card className="order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    CS107: C++ Programming
                  </CardTitle>
                  <CardDescription>Saylor Academy • Advanced Programming Certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Successfully completed the comprehensive C++ Programming MOOC offered by Saylor Academy. This
                    rigorous course covered advanced object-oriented programming concepts, memory management, and
                    complex data structures, significantly enhancing my programming expertise.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://learn.saylor.org/admin/tool/certificate/index.php?code=7743914071UA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-4">
                  <Code className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Programming</h3>
                <p className="text-muted-foreground">Mastering object-oriented concepts and complex data structures</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-4">
                  <Award className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect English Score</h3>
                <p className="text-muted-foreground">Exceptional language mastery and communication skills</p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Pearson's Test of English
                  </CardTitle>
                  <CardDescription>Perfect Score Achievement • 90/90</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Achieved a perfect score of 90/90 on Pearson's Test of English, demonstrating exceptional mastery of
                    the English language. This achievement highlights my communication skills and ability to excel in
                    standardized assessments, which later enabled me to become a successful English tutor.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <Card className="order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Code-a-Haunt 2.0 Participation
                  </CardTitle>
                  <CardDescription>Hackathon Certificate • Team Collaboration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Participated in Code-a-Haunt 2.0 hackathon alongside my friends, working on an ambitious movie
                    recommender system. This experience was invaluable for learning team collaboration, working under
                    pressure, and tackling complex technical challenges within tight deadlines.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://verification.givemycertificate.com/v/d75d081a-4998-45ae-97e6-e5702ba78ede"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Verify Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-4">
                  <Trophy className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hackathon Experience</h3>
                <p className="text-muted-foreground">Team collaboration and high-pressure problem solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey has provided valuable insights into different industries and work environments.
              Each role has contributed to my growth, teaching me essential skills in data management, education, and
              professional communication.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full border-4 border-background relative z-10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent md:hidden" />
                      English Language Tutor
                    </CardTitle>
                    <CardDescription>Pearson's Test of English Specialist • April 2023 - May 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Served as a full-time tutor specializing in Pearson's Test of English preparation, leveraging my
                      perfect score achievement to help students reach their language proficiency goals. This role
                      involved creating personalized learning strategies, conducting one-on-one sessions, and developing
                      comprehensive study materials. The experience enhanced my communication skills, patience, and
                      ability to break down complex concepts for diverse learning styles.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-8 items-start">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full border-4 border-background relative z-10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent md:hidden" />
                      Data Sorting Intern
                    </CardTitle>
                    <CardDescription>MediTech • June 2022 - September 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Gained valuable hands-on experience in data management and sorting processes at an American-based
                      pharmaceutical company. This role involved working with large datasets, ensuring data accuracy,
                      and maintaining organized information systems. The experience taught me the importance of
                      precision, attention to detail, and working within regulated industry standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities and collaborations in cybersecurity, programming, and creative
            projects. Whether you're looking for a dedicated team member, a creative problem solver, or someone
            passionate about technology and design, I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild>
              <a href="mailto:utsavarora4765@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <a
              href="https://linkedin.com/in/utsavarora4765"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Elirif4765"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <Separator className="my-6" />
          <p className="text-sm text-muted-foreground">
            © 2024 Utsav Arora. Built with passion for technology and design.
          </p>
        </div>
      </footer>
    </div>
  )
}
