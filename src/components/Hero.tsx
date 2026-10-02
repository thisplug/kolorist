import BlurText from './BlurText';
import Aurora from './Aurora';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Aurora
        colorStops={['#faf7f4', '#e8d5cc', '#c9a89a']}
        amplitude={0.8}
        blend={0.6}
        speed={0.6}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">
          Колорист · Челябинск
        </p>

        <BlurText
          text="Обучение колористике с нуля"
          delay={80}
          animateBy="words"
          direction="bottom"
          className="font-display text-5xl leading-tight text-charcoal md:text-7xl"
        />

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/30 bg-white/55 px-6 py-5 shadow-sm backdrop-blur-sm md:px-10 md:py-6">
          <p className="font-display text-2xl leading-tight text-charcoal md:text-3xl">
            Топ-колорист и преподаватель с 20-летним опытом
          </p>
          <p className="mt-3 text-base leading-relaxed text-warm-gray md:text-lg">
            Помогаю освоить правила колористики — от первых шагов до уверенной
            работы с клиентами.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://vk.com/mikhailova__hair"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-8 py-3.5 text-sm uppercase tracking-widest text-cream transition-all hover:bg-gold hover:shadow-lg"
          >
            Написать в VK
          </a>
          <a
            href="#training"
            className="rounded-full border border-charcoal/20 px-8 py-3.5 text-sm uppercase tracking-widest text-charcoal transition-all hover:border-gold hover:text-gold"
          >
            Узнать об обучении
          </a>
        </div>

      </div>
    </section>
  );
}
