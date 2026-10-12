import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches && !userPaused.current) {
        void video.play().catch(() => {
          // Keep the poster and play button when autoplay is unavailable.
        });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.1 });

    observer.observe(video);
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}hero-student-work.mp4`}
          poster={`${import.meta.env.BASE_URL}hero-student-work-poster.jpg`}
          width={540}
          height={960}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Работа ученицы: процесс окрашивания и готовый результат. Видео без звука."
          className="absolute inset-0 h-full w-full object-cover object-center"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/55" aria-hidden="true" />
        {!failed && (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? 'Приостановить видео' : 'Воспроизвести видео'}
            className="absolute bottom-6 right-6 z-20 rounded-full bg-charcoal/85 px-4 py-2.5 text-xs text-cream transition-colors hover:bg-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {playing ? 'Ⅱ Пауза' : '▶ Смотреть'}
          </button>
        )}
    </div>
  );
}
