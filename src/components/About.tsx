import FadeContent from './FadeContent';
import BlurText from './BlurText';

const stats = [
  { value: '20', label: 'лет в профессии' },
  { value: '13', label: 'лет в предпринимательстве' },
  { value: '20 000+', label: 'довольных клиентов' },
  { value: '2–3', label: 'месяца обучения' },
];

const credentials = [
  'Амбассадор в сфере профессиональной колористики',
  'Эксперт по сложным случаям в окрашиваниях волос',
  'Постоянно повышаю квалификацию и развиваю навыки преподавания',
  'Работаю на красителях премиум-класса',
];

const expertise = [
  'Шитьё седины',
  'Исправление чужих неудачных работ',
  'Все сложные окрашивания',
  'Выход из чёрного за один день',
  'Подбор образа с учётом цветотипа',
];

const courseGoals = [
  'Уверенно работать с любым клиентом',
  'Понимать логику цвета, а не учить «по картинкам»',
  'Избегать распространённых ошибок',
  'Создавать премиальные окрашивания',
  'Расти в доходе и уровне клиентов',
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent blur duration={1200}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Обо мне</p>
            <BlurText
              text="Меня зовут Алёна, и я 20 лет преподаю и практикую колористику"
              delay={60}
              animateBy="words"
              className="font-display text-3xl text-charcoal md:text-5xl"
            />
          </div>
        </FadeContent>

        <FadeContent delay={100}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-rose-light/30 bg-white/50 p-6 text-center"
              >
                <span className="font-display text-4xl text-gold">{stat.value}</span>
                <p className="mt-2 text-sm text-warm-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeContent>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeContent delay={150}>
            <div className="space-y-5 text-warm-gray leading-relaxed">
              <p>
                Обучаю колористике с нуля. В 2006 году, сразу после школы, пошла навстречу
                мечте — я из тех, кому не пригодилось высшее образование.
              </p>
              <p>
                За эти годы я прошла путь от начинающего мастера до топ-колориста и
                преподавателя, к которому приходят за премиальным результатом,
                исправлением сложных случаев и понятным обучением.
              </p>
              <p>
                Я знаю, каково это — чувствовать неуверенность и думать, что «всё слишком
                сложно». Я была там сама, когда только начинала свой путь. Я передаю то,
                чего сама не получила в начале: ясность, логику и уверенность в каждом шаге.
              </p>
              <p>
                Я всегда улучшаю свои знания, слежу за тенденциями и иду в ногу со
                временем. Забочусь о волосах каждой из вас.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={250}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-charcoal">Образование и статус</h3>
                <ul className="mt-4 space-y-3">
                  {credentials.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-warm-gray">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal">Специализация</h3>
                <ul className="mt-4 space-y-3">
                  {expertise.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-warm-gray">
                      <span className="text-gold">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeContent>
        </div>

        <FadeContent delay={300}>
          <div className="mt-16 rounded-3xl border border-rose-light/30 bg-gradient-to-br from-rose-light/20 via-cream to-gold/10 p-8 md:p-12">
            <h3 className="font-display text-2xl text-charcoal md:text-3xl">
              Авторский курс «Колористика с нуля»
            </h3>
            <p className="mt-4 max-w-3xl text-warm-gray leading-relaxed">
              Я создала системный подход к колористике, понятный даже тем, кто только
              начинает. За 20 лет практики и преподавания я собрала всё необходимое,
              чтобы провести учениц от первых шагов до уверенной работы за 2–3 месяца.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {courseGoals.map((goal) => (
                <li key={goal} className="flex items-start gap-2 text-sm text-charcoal/90">
                  <span className="text-gold">✔</span>
                  {goal}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-warm-gray">
              Моя цель — чтобы мои ученицы не просто изучили технику, а стали мастерами,
              которым доверяют. На протяжении всего обучения я буду рядом.
            </p>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
