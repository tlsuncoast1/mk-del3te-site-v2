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

function Hotspot({
  href,
  label,
  className,
  external = false,
}: {
  href: string;
  label: string;
  className: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`hotspot ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative mx-auto w-full max-w-[1400px] bg-black">
        <img
          src="/hero.png"
          alt="MK DEL3TE cyberpunk neon landing page"
          className="relative z-0 block w-full object-contain"
        />

        <img
          src="/hero.png"
          aria-hidden="true"
          className="glitch-layer absolute inset-0 z-10 block w-full object-contain opacity-25"
        />

        <div className="absolute inset-0 z-50">
          {/* nav */}
          <Hotspot href="#top" label="Home" className="left-[18.5%] top-[2.4%] h-[2.6%] w-[6.2%]" />
          <Hotspot href={links.soundcloud} label="Music" external className="left-[26.4%] top-[2.4%] h-[2.6%] w-[6.4%]" />
          <Hotspot href={links.youtube} label="Live" external className="left-[35.1%] top-[2.4%] h-[2.6%] w-[4.8%]" />
          <Hotspot href={links.projectRecords} label="Project Records" external className="left-[42.2%] top-[2.4%] h-[2.6%] w-[15.3%]" />
          <Hotspot href={links.email} label="Contact" className="left-[70.1%] top-[2.4%] h-[2.6%] w-[7.3%]" />

          {/* social icons */}
          <Hotspot href={links.soundcloud} label="SoundCloud" external className="right-[20%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.youtube} label="YouTube" external className="right-[15.2%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.x} label="X" external className="right-[10.2%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.instagram} label="Instagram" external className="right-[5.7%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />
          <Hotspot href={links.spotify} label="Spotify" external className="right-[1.6%] top-[2.2%] h-[3.2%] w-[3.2%] rounded-full" />

          {/* release */}
          <Hotspot href={links.soundcloud} label="Listen Now" external className="left-[54%] top-[58.2%] h-[4.2%] w-[24%]" />
          <Hotspot href={links.soundcloud} label="Release SoundCloud" external className="left-[52.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />
          <Hotspot href={links.youtube} label="Release YouTube" external className="left-[60.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />
          <Hotspot href={links.spotify} label="Release Spotify" external className="left-[68.7%] top-[64.2%] h-[3.4%] w-[4%] rounded-full" />

          {/* bottom */}
          <Hotspot href={links.projectRecords} label="Enter Project Records" external className="bottom-[6.5%] right-[18%] h-[3.2%] w-[23%]" />
          <Hotspot href={links.projectRecords} label="Project Records Website" external className="bottom-[3.9%] right-[19.8%] h-[2%] w-[18%]" />
          <Hotspot href={links.email} label="Email" className="bottom-[1.8%] left-[39%] h-[2.8%] w-[22%]" />
        </div>

        <div className="scanlines absolute inset-0 z-30" />
        <div className="vignette absolute inset-0 z-30" />
      </section>
    </main>
  );
}