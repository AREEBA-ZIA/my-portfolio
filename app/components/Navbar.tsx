export default function Navbar() {
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'20px 48px',
      backgroundColor:'rgba(93,13,24,0.85)',
      backdropFilter:'blur(10px)',
      zIndex:100
    }}>
      <span style={{color:'#FFF9EB', fontWeight:'700', fontSize:'20px'}}>
        Areeba<span style={{color:'#9FB2AC'}}>.dev</span>
      </span>
      <div style={{display:'flex', gap:'32px'}}>
        <a href="#about" style={{color:'#FFF9EB', textDecoration:'none', fontSize:'14px'}}>About</a>
        <a href="#projects" style={{color:'#FFF9EB', textDecoration:'none', fontSize:'14px'}}>Projects</a>
        <a href="#contact" style={{color:'#FFF9EB', textDecoration:'none', fontSize:'14px'}}>Contact</a>
      </div>
    </nav>
  );
}