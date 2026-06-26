import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'24px'}}>
        <section style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'24px'}}>
          <p style={{color:'#9FB2AC',letterSpacing:'4px',textTransform:'uppercase',fontSize:'14px'}}>
            Frontend Developer and AI Student
          </p>
          <h1 style={{color:'#FFF9EB',fontSize:'48px',fontWeight:'bold'}}>
            Hi, I am Areeba Zia
          </h1>
          <p style={{color:'#FFF9EB',opacity:0.75,fontSize:'18px',maxWidth:'560px'}}>
            I build clean, modern web experiences. Currently pursuing BS in AI.
          </p>
          <div style={{display:'flex',gap:'16px',marginTop:'16px'}}>
            <a href="#projects" style={{backgroundColor:'#9FB2AC',color:'#5D0D18',padding:'12px 24px',borderRadius:'999px',fontWeight:'600',textDecoration:'none'}}>
              View Projects
            </a>
            <a href="#contact" style={{border:'2px solid #9FB2AC',color:'#9FB2AC',padding:'12px 24px',borderRadius:'999px',fontWeight:'600',textDecoration:'none'}}>
              Contact Me
            </a>
          </div>
        </section>
      </main>
      {/* About Section */}
      <section id="about" style={{padding:'80px 48px',maxWidth:'800px',margin:'0 auto',textAlign:'center'}}>
        <p style={{color:'#9FB2AC',letterSpacing:'4px',textTransform:'uppercase',fontSize:'14px',marginBottom:'16px'}}>
          About Me
        </p>
        <h2 style={{color:'#FFF9EB',fontSize:'36px',fontWeight:'bold',marginBottom:'24px'}}>
          Who I Am
        </h2>
        <p style={{color:'#FFF9EB',opacity:0.75,fontSize:'18px',lineHeight:'1.8'}}>
          I am a Frontend Developer and freelancer based in Lahore, Pakistan. 
          I specialize in building modern web applications using React and Next.js. 
          Currently pursuing my BS in Artificial Intelligence at UMT while working 
          on real-world SaaS products and client projects.
        </p>

        <div style={{display:'flex',justifyContent:'center',gap:'48px',marginTop:'48px'}}>
          <div>
            <h3 style={{color:'#9FB2AC',fontSize:'32px',fontWeight:'bold'}}>2+</h3>
            <p style={{color:'#FFF9EB',opacity:0.6,fontSize:'14px'}}>Years Experience</p>
          </div>
          <div>
            <h3 style={{color:'#9FB2AC',fontSize:'32px',fontWeight:'bold'}}>10+</h3>
            <p style={{color:'#FFF9EB',opacity:0.6,fontSize:'14px'}}>Projects Built</p>
          </div>
          <div>
            <h3 style={{color:'#9FB2AC',fontSize:'32px',fontWeight:'bold'}}>5+</h3>
            <p style={{color:'#FFF9EB',opacity:0.6,fontSize:'14px'}}>Happy Clients</p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" style={{padding:'80px 48px',maxWidth:'1100px',margin:'0 auto',textAlign:'center'}}>
        <p style={{color:'#9FB2AC',letterSpacing:'4px',textTransform:'uppercase',fontSize:'14px',marginBottom:'16px'}}>
          My Work
        </p>
        <h2 style={{color:'#FFF9EB',fontSize:'36px',fontWeight:'bold',marginBottom:'48px'}}>
          Projects
        </h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'24px'}}>
          
          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'32px',textAlign:'left',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#FFF9EB',fontSize:'22px',fontWeight:'bold',marginBottom:'12px'}}>Rootfre</h3>
            <p style={{color:'#FFF9EB',opacity:0.7,fontSize:'15px',lineHeight:'1.7',marginBottom:'20px'}}>
              A social media scheduling SaaS app built with Next.js 15, PostgreSQL, and Prisma. 
              Supports multi-platform post scheduling and AI caption generation.
            </p>
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'20px'}}>
              {['Next.js','Prisma','PostgreSQL','Railway'].map(tag => (
                <span key={tag} style={{backgroundColor:'rgba(159,178,172,0.15)',color:'#9FB2AC',padding:'4px 12px',borderRadius:'999px',fontSize:'12px'}}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" style={{color:'#9FB2AC',fontSize:'14px',fontWeight:'600',textDecoration:'none'}}>View Project →</a>
          </div>

          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'32px',textAlign:'left',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#FFF9EB',fontSize:'22px',fontWeight:'bold',marginBottom:'12px'}}>AI Code Reviewer</h3>
            <p style={{color:'#FFF9EB',opacity:0.7,fontSize:'15px',lineHeight:'1.7',marginBottom:'20px'}}>
              A GitHub-integrated AI code review tool using FastAPI, React, and Google Gemini API 
              for automated PR analysis.
            </p>
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'20px'}}>
              {['FastAPI','React','Gemini API','Docker'].map(tag => (
                <span key={tag} style={{backgroundColor:'rgba(159,178,172,0.15)',color:'#9FB2AC',padding:'4px 12px',borderRadius:'999px',fontSize:'12px'}}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" style={{color:'#9FB2AC',fontSize:'14px',fontWeight:'600',textDecoration:'none'}}>View Project →</a>
          </div>

          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'32px',textAlign:'left',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#FFF9EB',fontSize:'22px',fontWeight:'bold',marginBottom:'12px'}}>Campus Analytics Engine</h3>
            <p style={{color:'#FFF9EB',opacity:0.7,fontSize:'15px',lineHeight:'1.7',marginBottom:'20px'}}>
              A multi-module university management system in C++ with fee tracking, 
              merit lists, and report generation.
            </p>
            <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'20px'}}>
              {['C++','OOP','File I/O','GitHub'].map(tag => (
                <span key={tag} style={{backgroundColor:'rgba(159,178,172,0.15)',color:'#9FB2AC',padding:'4px 12px',borderRadius:'999px',fontSize:'12px'}}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" style={{color:'#9FB2AC',fontSize:'14px',fontWeight:'600',textDecoration:'none'}}>View Project →</a>
          </div>

        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" style={{padding:'80px 48px',maxWidth:'900px',margin:'0 auto',textAlign:'center'}}>
        <p style={{color:'#9FB2AC',letterSpacing:'4px',textTransform:'uppercase',fontSize:'14px',marginBottom:'16px'}}>
          What I Know
        </p>
        <h2 style={{color:'#FFF9EB',fontSize:'36px',fontWeight:'bold',marginBottom:'48px'}}>
          Skills
        </h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'24px',textAlign:'left'}}>
          
          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'28px',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#9FB2AC',fontSize:'16px',fontWeight:'600',marginBottom:'16px'}}>Frontend</h3>
            {['React','Next.js','Tailwind CSS','HTML & CSS','JavaScript'].map(skill => (
              <div key={skill} style={{color:'#FFF9EB',opacity:0.8,fontSize:'15px',padding:'8px 0',borderBottom:'1px solid rgba(255,249,235,0.08)'}}>
                {skill}
              </div>
            ))}
          </div>

          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'28px',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#9FB2AC',fontSize:'16px',fontWeight:'600',marginBottom:'16px'}}>Backend & Tools</h3>
            {['Node.js','FastAPI','Prisma','PostgreSQL','Docker'].map(skill => (
              <div key={skill} style={{color:'#FFF9EB',opacity:0.8,fontSize:'15px',padding:'8px 0',borderBottom:'1px solid rgba(255,249,235,0.08)'}}>
                {skill}
              </div>
            ))}
          </div>

          <div style={{backgroundColor:'#3a0810',borderRadius:'16px',padding:'28px',border:'1px solid rgba(159,178,172,0.2)'}}>
            <h3 style={{color:'#9FB2AC',fontSize:'16px',fontWeight:'600',marginBottom:'16px'}}>AI & Others</h3>
            {['Python','C++','Gemini API','Anthropic API','Git & GitHub'].map(skill => (
              <div key={skill} style={{color:'#FFF9EB',opacity:0.8,fontSize:'15px',padding:'8px 0',borderBottom:'1px solid rgba(255,249,235,0.08)'}}>
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" style={{padding:'80px 48px',maxWidth:'600px',margin:'0 auto',textAlign:'center'}}>
        <p style={{color:'#9FB2AC',letterSpacing:'4px',textTransform:'uppercase',fontSize:'14px',marginBottom:'16px'}}>
          Get In Touch
        </p>
        <h2 style={{color:'#FFF9EB',fontSize:'36px',fontWeight:'bold',marginBottom:'16px'}}>
          Contact Me
        </h2>
        <p style={{color:'#FFF9EB',opacity:0.7,fontSize:'18px',lineHeight:'1.8',marginBottom:'48px'}}>
          Whether you have a project in mind or just want to say hi, my inbox is always open!
        </p>

        <div style={{display:'flex',flexDirection:'column',gap:'16px',marginBottom:'48px'}}>
          <a href="areebazia959@gmail.com" style={{backgroundColor:'#9FB2AC',color:'#5D0D18',padding:'16px 32px',borderRadius:'999px',fontWeight:'600',textDecoration:'none',fontSize:'16px'}}>
            Send Me an Email
          </a>
          <a href="https://github.com/AREEBA-ZIA" target="_blank" style={{border:'2px solid #9FB2AC',color:'#9FB2AC',padding:'16px 32px',borderRadius:'999px',fontWeight:'600',textDecoration:'none',fontSize:'16px'}}>
            GitHub Profile
          </a>
        </div>

        <p style={{color:'#FFF9EB',opacity:0.4,fontSize:'14px'}}>
          © 2025 Areeba Zia. All rights reserved.
        </p>
      </section>
    </>
  );
}