import FadeContent from './FadeContent';
import BlurText from './BlurText';

const benefits = [
  {
    title: 'Система, а не хаос',
    text: 'Чёткая логика обучения: что смотреть сначала, как думать, как не путаться. Ты не заучиваешь — ты начинаешь понимать.',
  },
  {
    title: 'Опыт 20 лет',
    text: 'Я практикую и преподаю колористику 20 лет. На занятиях делюсь знаниями, секретами и практическими навыками, которые помогают уверенно работать с клиентами.',
  },
  {
    title: 'Быстрый результат',
    text: 'За 2–3 месяца вы получаете систему, которую я выстраивала 20 лет. Мои ученицы начинают работать, а не просто смотреть уроки.',
  },
  {
    title: 'Доступ сразу',
    text: 'Не нужно ждать — доступ к материалам открывается сразу после оплаты. Обучайтесь в своём темпе.',
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeContent blur>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Обучение</p>
            <BlurText
              text="Колористика с нуля — понятно и системно"
              delay={60}
              animateBy="words"
              className="font-display text-3xl text-charcoal md:text-5xl"
            />
            <p className="mx-auto mt-6 max-w-2xl text-warm-gray leading-relaxed">
              Я создала авторский курс для тех, кто хочет освоить колористику с нуля.
              Даю чёткую логику вместо хаоса — вы начинаете понимать, а не заучивать.
            </p>
          </div>
        </FadeContent>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((item, i) => (
            <FadeContent key={item.title} delay={i * 100}>
              <div className="group rounded-2xl border border-rose-light/30 bg-cream/50 p-8 transition-colors hover:border-gold/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-display text-lg text-gold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">{item.text}</p>
              </div>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={400}>
          <div className="mt-16 rounded-3xl bg-charcoal p-10 text-center md:p-16">
            <p className="font-display text-2xl text-cream md:text-3xl">
              «Устала от «ничего не понятно»?»
            </p>
            <p className="mx-auto mt-4 max-w-xl text-rose-light/80">
              Напишите мне — расскажу подробнее, как начать обучение и что вас ждёт
              на каждом этапе.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-block rounded-full bg-gold px-10 py-3.5 text-sm uppercase tracking-widest text-charcoal transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Смотреть тарифы
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
