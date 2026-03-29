import "./App.css";
import foto from "./assets/fotorv.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">
      {/* Aurora */}
      <div className="aurora-bg">
        <span className="blur blur1"></span>
        <span className="blur blur2"></span>
        <span className="blur blur3"></span>
        <span className="blur blur4"></span>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Portofolio</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ================= HOME ================= */}
      <main className="hero" id="home">
        <section className="hero-left">
          <div className="quote-card">
            <img src={foto} alt="Jefry" className="quote-avatar" />
            <span>"Belajar sedikit demi sedikit, tapi terus maju."</span>
          </div>

          <h1>Jefry Subastian</h1>

          <p className="desc">
            Mahasiswa Politeknik Negeri Bengkalis yang mempunyai skill
            Fullstack development. Yang sekarang lagi magang di perusahaan ISP
            untuk mempelajari Networking.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" className="btn primary">
              Download CV
            </a>
            <a href="#project" className="btn secondary">
              Explore My Projects
            </a>
          </div>
        </section>

        <section className="hero-right">
          <div className="profile-card">
            <div className="card-holo"></div>
            <div className="card-glare"></div>

            <div className="card-content">
              <h2>Jefry Subastian</h2>
              <p className="role">Network & Web Learner</p>

              <div className="profile-image">
                <img src={foto} alt="Profile" className="profile-img" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <h2>About Me</h2>

        <div className="about-card">
          <p>
            Saya adalah mahasiswa Politeknik Negeri Bengkalis yang memiliki
            ketertarikan di bidang jaringan dan web development. Saat ini saya
            sedang menjalani magang di perusahaan ISP, di mana saya belajar
            langsung mengenai instalasi jaringan, troubleshooting, serta
            pemeliharaan sistem jaringan.
          </p>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section className="project" id="project">
        <h2>My Project</h2>

        <div className="project-container">
          <a
            href="https://sawitgodigi.site/"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img
              src="https://image.thum.io/get/width/800/https://sawitgodigi.site/"
              alt="SawitGoDigi"
            />

            <div className="project-overlay">
              <h3>SawitGoDigi</h3>
              <p>
                SawitGoDigi adalah solusi aplikasi web dan mobile yang
                memudahkan petani dan agen dalam mencatat dan memantau hasil
                panen secara efisien dan terintegrasi.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <h2>Contact</h2>

        <div className="contact-container">
          <a
            href="https://wa.me/62XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://instagram.com/username"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://facebook.com/username"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </a>

          <a
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;