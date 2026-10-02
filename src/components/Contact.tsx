import FadeContent from './FadeContent';

export default function Contact() {
  return (
    <section id="contact" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent>
          <div className="mb-8 text-center">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold">Контакты</h2>
          </div>
        </FadeContent>

        <div className="mx-auto max-w-2xl">
          <FadeContent delay={150}>
            <div className="rounded-2xl border border-rose-light/30 bg-cream/50 p-8 text-center">
              <span className="text-3xl">💬</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">Связаться</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                Напишите мне в удобной соцсети — отвечу на вопросы об обучении.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://vk.com/mikhailova__hair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-charcoal px-6 py-3 text-sm text-cream transition-colors hover:bg-gold"
              >
                ВКонтакте
              </a>
              <a
                href="https://www.instagram.com/mikhailova__hair?stkn=MWE0cDZyNHp5amFj&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-charcoal/20 px-6 py-3 text-sm text-charcoal transition-colors hover:border-gold hover:text-gold"
              >
                Instagram
              </a>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
