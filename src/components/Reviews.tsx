import FadeContent from './FadeContent';

const reviews = [
  {
    text: 'Хочу сказать вам спасибо! Обучалась у вас — и это было удовольствие. Каждое действие объяснялось: было понятно, как, что и для чего мы делаем. Потом всё можно было увидеть наглядно и попробовать повторить. Вы грамотный профессионал в своём деле, я осталась довольна, спасибо 🙏🥰',
    label: 'Отзыв ученицы',
  },
  {
    text: 'Если бы мне год назад сказали, что я буду учиться с малышом и ещё и зарабатывать, я бы покрутила у виска 😂 Но ваш курс меня спас. Всё понятно, чётко и с душой. Смотрела уроки, пока сын спал, и уже сделала двух первых клиентов — 11 тысяч уже мои!',
    label: 'Отзыв ученицы',
  },
  {
    text: 'Алёна, добрый день! Я вчера сделала первое окрашивание подруге — и оно получилось! До сих пор в шоке и честно не верила, что у меня хоть что-то получится. Вы объясняете так по-человечески и простыми словами. Спасибо за ваше терпение и отдачу!',
    label: 'Отзыв ученицы',
  },
  {
    text: 'Я хочу сказать спасибо за вашу обратную связь. Я редко что-то спрашиваю, обычно стесняюсь. Но вы так спокойно отвечаете, что у меня исчез страх задавать вопросы.',
    label: 'Отзыв ученицы',
  },
  {
    text: 'После обучения я наконец перестала бояться сложных случаев. Теперь понимаю, с чего начать диагностику, как рассчитать формулу и спокойно объяснить клиенту каждый шаг.',
    label: 'Обратная связь после курса',
  },
  {
    text: 'Спасибо за систему и поддержку. Я пришла совсем без опыта, а вышла с понятным планом действий и уверенностью, что действительно могу работать колористом.',
    label: 'Обратная связь после курса',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Отзывы</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">
              Результаты, которыми хочется делиться
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-warm-gray">
              Спасибо ученицам за доверие, открытость и первые самостоятельные шаги в профессии.
            </p>
          </div>
        </FadeContent>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeContent key={review.text} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-rose-light/40 bg-cream/70 p-7">
                <div className="mb-5 flex gap-1 text-gold" aria-label="5 из 5">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span key={star} aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-charcoal/80">
                  «{review.text}»
                </blockquote>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">{review.label}</p>
              </article>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
