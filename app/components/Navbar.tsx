'use client';

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 48px',backgroundColor:'rgba(93,13,24,0.85)',backdropFilter:'blur(10px)',zIndex:100}}>
      <span style={{color:'#FFF9EB',fontWeight:'700',fontSize:'20px'}}>
        Areeba<span style={{color:'#9FB2AC'}}>.dev</span>
      </span>
      <div style={{display:'flex',gap:'32px'}}>
        {[['about','About'],['projects','Projects'],['skills','Skills'],['contact','Contact']].map(([id,label]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{color:'#FFF9EB',background:'none',border:'none',cursor:'pointer',fontSize:'14px',fontWeight:'500'}}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}