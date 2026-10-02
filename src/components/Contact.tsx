import FadeContent from './FadeContent';

export default function Contact() {
  return (
    <section id="contact" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeContent>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Контакты</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">
              Запишитесь на приём
            </h2>
          </div>
        </FadeContent>

        <div className="grid gap-8 md:grid-cols-2">
          <FadeContent delay={150}>
            <div className="rounded-2xl border border-rose-light/30 bg-cream/50 p-8 text-center">
              <span className="text-3xl">🕐</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">Режим работы</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                Ежедневно
                <br />
                до 20:00
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={300}>
            <div className="rounded-2xl border border-rose-light/30 bg-cream/50 p-8 text-center">
              <span className="text-3xl">💬</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">Связаться</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                Запись и вопросы — через сообщество ВКонтакте
              </p>
              <a
                href="https://vk.com/mikhailova__hair"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-charcoal px-6 py-2.5 text-sm text-cream transition-colors hover:bg-gold"
              >
                vk.com/mikhailova__hair
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
