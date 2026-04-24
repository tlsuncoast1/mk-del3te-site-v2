'use client';

const links = {
  soundcloud: 'https://soundcloud.com/mkdel3te',
  youtube: 'https://www.youtube.com/@MkDel3te',
  x: 'https://x.com/MKDel3te',
  instagram: 'https://www.instagram.com/mkdel3te',
  spotify: 'https://open.spotify.com/search/MK%20DEL3TE',
  projectRecords: 'https://project-records.com',
  email: 'mailto:tlsuncoast1@gmail.com',
};

function Hotspot(props: { href: string; label: string; className: string; external?: boolean }) {
  return (
    <a
      href={props.href}
      aria-label={props.label}
      target={props.external ? '_blank' : undefined}
      rel={props.external ? 'noreferrer' : undefined}
      className={`hotspot ${props.className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden bg-black">
        <img src="/hero.png" alt="MK DEL3TE neon cyberpunk homepage" className="relative z-0 block h-auto w-full max-w-[1400px] object-contain" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-cyan pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-35 mix-blend-screen" />
        <img src="/hero.png" aria-hidden="true" className="glitch-layer glitch-pink pointer-events-none absolute inset-0 z-10 h-auto w-full max-w-[1400px] object-contain opacity-30 mix-blend-screen" />

        <div className="absolute inset-0 z-50">
          <Hotspot href="#top" label="Home" className="absolute left-[18.5%] top-[2.4%] h-[2.6%] w-[6.2%]" />
          <Hotspot href={links.soundcloud} label="Music" external className="absolute left-[26.4%] top-[2.4%] h-[2.6%] w-[6.4%]" />
          <Hotspot href={links.youtube} label="Live" external className="absolute left-[35.1%] top-[2.4%] h-[2.6%] w-[4.8%]" />
          <Hotspot href={links.projectRecords} label="Project Records" external className="absolute left-[42.2%] top-[2.4%] h-[2.6%] w-[15.3%]" />
          <Hotspot href={links.email} label="Contact MK DEL3TE" className="absolute left-[70.1%] top-[2.4%] h-[2.6%] w-[7.3%]" />

          <Hotspot href={links.soundcloud} label="Open SoundCloud" external className="absolute right-[20%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.youtube} label="Open YouTube" external className="absolute right-[15.2%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.x} label="Open X" external className="absolute right-[10.2%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.instagram} label="Open Instagram" external className="absolute right-[5.7%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.spotify} label="Open Spotify" external className="absolute right-[1.6%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />

          <Hotspot href={links.soundcloud} label="Listen to Glitch Reality" external className="absolute left-[54%] top-[58.2%] h-[4.2%] w-[24%]" />
          <Hotspot href={links.soundcloud} label="Release SoundCloud" external className="absolute left-[52.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />
          <Hotspot href={links.youtube} label="Release YouTube" external className="absolute left-[60.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />
          <Hotspot href={links.spotify} label="Release Spotify" external className="absolute left-[68.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />

          <Hotspot href={links.projectRecords} label="Enter Project Records" external className="absolute bottom-[6.5%] right-[18%] h-[3.2%] w-[23%]" />
          <Hotspot href={links.projectRecords} label="Project Records website" external className="absolute bottom-[3.9%] right-[19.8%] h-[2%] w-[18%]" />
          <Hotspot href={links.email} label="Email bookings and inquiries" className="absolute bottom-[1.8%] left-[39%] h-[2.8%] w-[22%]" />
        </div>

        <div className="scanlines pointer-events-none absolute inset-0 z-30" />
        <div className="vignette pointer-events-none absolute inset-0 z-30" />
      </section>
    </main>
  );
}
