import BlurText from './BlurText';
import HeroVideo from './HeroVideo';

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-charcoal">
      <HeroVideo />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-28 pt-36 text-center md:py-36">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">
          Колорист · Челябинск
        </p>

        <BlurText
          text="Обучение колористике с нуля"
          delay={80}
          animateBy="words"
          direction="bottom"
          className="font-display text-5xl leading-tight text-cream md:text-7xl"
        />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream">
          Топ-колорист и преподаватель с 20-летним опытом. Помогаю освоить правила
          колористики — от первых шагов до уверенной работы с клиентами.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://vk.com/mikhailova__hair"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-light px-8 py-3.5 text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-cream hover:shadow-lg"
          >
            Написать в VK
          </a>
          <a
            href="#training"
            className="rounded-full border border-cream/70 bg-charcoal/25 px-8 py-3.5 text-sm uppercase tracking-widest text-cream transition-all hover:bg-cream hover:text-charcoal"
          >
            Узнать об обучении
          </a>
        </div>
      </div>
    </section>
  );
}
