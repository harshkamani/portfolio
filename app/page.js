import ClientScripts from './components/ClientScripts'

export default function Home() {
  return (
    <>
      <ClientScripts />
      <div className="cursor"></div>
      <div className="cursor-follower"></div>

      <nav>
        <div className="logo">HK.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="system-status">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </div>
          <h1 className="hero-name">
            <span className="name-first">HARSH</span>
            <span className="name-last">KAMANI</span>
          </h1>
          <div className="hero-roles">
            <span>DATA SCIENCE ENTHUSIAST</span>
            <span className="role-separator">///</span>
            <span>MCA STUDENT</span>
            <span className="role-separator">///</span>
            <span>PYTHON DEVELOPER</span>
          </div>
          <p className="hero-description">MCA student specializing in data science and Python development. I build data-driven solutions and explore machine learning algorithms to solve real-world problems.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#about" className="btn-secondary">View My Work</a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <img src="/assets/img/profile_pic.jpeg" alt="Harsh Kamani - Data Science Student" />
          </div>
          <div className="about-text">
            <h3>Curious. Analytical. Driven.</h3>
            <p>I am a 21-year-old Computer Science student currently pursuing my <strong>Master of Computer Applications (MCA)</strong>. My academic journey is fueled by a deep fascination with how data can shape the future.</p>
            <p>Currently based in <strong>Rajkot, Gujarat</strong>, I am actively expanding my skillset in the Data Science lifecycle. I enjoy solving complex problems using Python and exploring the mathematical foundations that power machine learning algorithms.</p>
            <div className="info-grid">
              <div className="info-card">
                <i className="fas fa-user-graduate"></i>
                <div>MCA Student</div>
              </div>
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <div>Rajkot, India</div>
              </div>
              <div className="info-card">
                <i className="fas fa-code"></i>
                <div>Python Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Project Title</h3>
              <div className="project-links">
                <a href="https://github.com/harshkamani" target="_blank" rel="noopener noreferrer" aria-label="View code"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="View live demo"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <p className="project-description">Brief description of your project, technologies used, and problem solved.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Project Title</h3>
              <div className="project-links">
                <a href="https://github.com/harshkamani" target="_blank" rel="noopener noreferrer" aria-label="View code"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="View live demo"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <p className="project-description">Brief description of your project, technologies used, and problem solved.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Data Analysis</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Project Title</h3>
              <div className="project-links">
                <a href="https://github.com/harshkamani" target="_blank" rel="noopener noreferrer" aria-label="View code"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="View live demo"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <p className="project-description">Brief description of your project, technologies used, and problem solved.</p>
            <div className="project-tags">
              <span>Machine Learning</span>
              <span>TensorFlow</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fab fa-python"></i>
            <h3>Python</h3>
            <p>Pandas, NumPy, Matplotlib, Scikit-learn</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-database"></i>
            <h3>Data Science</h3>
            <p>Data analysis, visualization, statistical modeling</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-brain"></i>
            <h3>Machine Learning</h3>
            <p>Supervised learning, model evaluation, feature engineering</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>HTML5, CSS3, JavaScript, responsive design</p>
          </div>
        </div>
      </section>

      <section id="journey">
        <h2 className="section-title">Journey & Milestones</h2>
        <div className="journey-grid">
          <div className="journey-card">
            <div className="journey-year">2025 - Present</div>
            <div className="journey-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Master of Computer Applications</h3>
            <p className="journey-institution">MCA Program</p>
            <p className="journey-description">Advanced computing, software development, and data technologies with focus on machine learning applications.</p>
            <div className="journey-highlights">
              <span><i className="fas fa-check-circle"></i> Data Structures</span>
              <span><i className="fas fa-check-circle"></i> Algorithms</span>
              <span><i className="fas fa-check-circle"></i> ML Fundamentals</span>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-year">2024</div>
            <div className="journey-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Python & Data Science</h3>
            <p className="journey-institution">Self-Learning</p>
            <p className="journey-description">Mastering Python ecosystem, data analysis libraries, and building real-world data science projects.</p>
            <div className="journey-highlights">
              <span><i className="fas fa-check-circle"></i> Python</span>
              <span><i className="fas fa-check-circle"></i> Jupyter Labs</span>
              <span><i className="fas fa-check-circle"></i> Basics of DS</span>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-year">2024</div>
            <div className="journey-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Bachelor&apos;s Degree</h3>
            <p className="journey-institution">Computer Science</p>
            <p className="journey-description">Completed undergraduate studies, building strong foundation in programming and computational thinking.</p>
            <div className="journey-highlights">
              <span><i className="fas fa-check-circle"></i> Core CS Concepts</span>
              <span><i className="fas fa-check-circle"></i> Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p>I&apos;m always open to discussing Data Science projects or new opportunities.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/officialharsh_8?igsh=dnc1bDdvcHQ0dDc=" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/harshkamani" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
          <a href="mailto:kamaniharsh1234@gmail.com" className="social-btn" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/harshkamani" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
        </div>
      </section>

      <footer>
        <div className="system-status" style={{justifyContent: 'center'}}>
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </div>
        <p style={{fontSize: '0.9rem', fontWeight: 500}}>DESIGNED &amp; CODED BY HARSH KAMANI</p>
        <p style={{fontSize: '0.85rem', marginTop: '0.5rem'}}>&copy; 2025 Harsh Kamani. All Rights Reserved.</p>
      </footer>
    </>
  )
}
