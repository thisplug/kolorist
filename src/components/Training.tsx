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
    title: 'Пошаговый доступ',
    text: 'Материалы открываются последовательно: следующий этап становится доступен после сдачи домашнего задания. Так знания закрепляются, а сложные темы не превращаются в хаос.',
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Поддержка</p>
              <h3 className="mt-3 font-display text-2xl text-charcoal">Я рядом на всём пути</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                Во время обучения я всегда на связи: отвечаю на вопросы, разбираю
                домашние задания и помогаю увидеть следующий шаг. После обучения
                поддержка не заканчивается — вы можете обратиться ко мне за советом
                в рабочих ситуациях.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-light/40 bg-white/60 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Моя цель</p>
              <h3 className="mt-3 font-display text-2xl text-charcoal">Чтобы ваше имя было на слуху</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                Я хочу, чтобы имя каждой моей ученицы звучало в этой сфере, а её
                результатами гордились клиенты. Поэтому мы работаем не только с
                техникой, но и с уверенностью, образом мастера и развитием практики.
              </p>
            </div>
          </div>
        </FadeContent>

        <FadeContent delay={500}>
          <div className="mt-16 rounded-3xl bg-charcoal p-10 text-center md:p-16">
            <p className="font-display text-2xl text-cream md:text-3xl">
              «Устала от «ничего не понятно»?»
            </p>
            <p className="mx-auto mt-4 max-w-xl text-rose-light/80">
              Напишите мне — расскажу подробнее, как начать обучение и что вас ждёт
              на каждом этапе.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/90">
              Вы научитесь уверенно работать, собирать запись, формировать достойный
              прайс и расти в доходе вместе с уровнем своих клиентов.
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
