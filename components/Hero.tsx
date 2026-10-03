'use client';

import { useEffect, useRef } from 'react';
import { media } from '../content/site';

/** Her düşüncenin, hero scroll mesafesinin hangi oranında başladığı. */
const STARTS = [0, 0.24, 0.48, 0.72];
/** Bu noktadan sonra video, Büro bölümünün ceviz tonuna devredilir. */
const EXIT = 0.87;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    if (!hero || !stage) return;

    const states = Array.from(stage.querySelectorAll<HTMLElement>('[data-phase]'));
    let current = -1;

    // Scroll yalnızca anlatıyı ilerletir. Videoya (currentTime, play, pause) burada hiç dokunulmaz.
    const apply = (p: number) => {
      let idx = 0;
      STARTS.forEach((start, i) => {
        if (p >= start) idx = i;
      });
      if (idx !== current) {
        current = idx;
        stage.dataset.state = String(idx);
        states.forEach((el, i) => {
          el.dataset.phase = i === idx ? 'active' : i < idx ? 'past' : 'future';
          el.inert = i !== idx;
        });
      }
      const veil = Math.min(1, Math.max(0, (p - EXIT) / (1 - EXIT)));
      stage.style.setProperty('--veil', veil.toFixed(3));
      stage.style.setProperty('--progress', Math.min(1, p / EXIT).toFixed(3));
    };

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      apply(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="top" aria-label="Karşılama">
      <div ref={stageRef} className="stage" data-state="0">
        <video
          className="video"
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="layer shadeLeft" />
        <div className="layer vignette" />
        <div className="layer grain" />

        <div className="content">
          <div className="rail" aria-hidden="true" />
          <div className="states">
            <article className="state" data-phase="active">
              <span className="meta">01 / HUKUK</span>
              <h1 className="title">
                Her mesele,
                <br />
                bir dengeden fazlasıdır.
              </h1>
              <p className="body">
                Bir uyuşmazlığın ardında yalnızca kurallar değil; haklar, sorumluluklar ve kararlar vardır.
              </p>
            </article>

            <article className="state" data-phase="future">
              <span className="meta">02 / YAKLAŞIM</span>
              <h2 className="title titleMd">
                Meseleyi
                <br />
                önce anlamak gerekir.
              </h2>
              <p className="body">Doğru hukuki yaklaşım, doğru soruyu sormakla başlar.</p>
            </article>

            <article className="state" data-phase="future">
              <span className="meta">03 / DENGE</span>
              <h2 className="title titleSm">
                Hak ile sorumluluk,
                <br />
                iddia ile gerçek,
                <br />
                bugün ile yarın arasında.
              </h2>
              <p className="body">
                Hukuk, yalnızca bir sonuca ulaşmak değil; o sonuca giden yolu doğru kurmaktır.
              </p>
            </article>

            <article className="state" data-phase="future">
              <span className="meta">04 / BİÇER</span>
              <h2 className="wordmark">BİÇER</h2>
              <p className="firm">Hukuk Bürosu</p>
              <p className="person">YAVUZHAN BİÇER</p>
              <a className="cta" href="#buro">
                BÜROYU KEŞFET <span aria-hidden="true">↓</span>
              </a>
            </article>
          </div>
        </div>

        <div className="cue" aria-hidden="true">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
        <div className="layer veil" />
      </div>
    </section>
  );
}
