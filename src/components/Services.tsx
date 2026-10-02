import FadeContent from './FadeContent';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    icon: '🎨',
    title: 'Окрашивание волос',
    description:
      'Сложное окрашивание, тонирование и работа с блондом с бережным отношением к качеству волос.',
    features: ['Сложное окрашивание', 'Работа с блондом', 'Бережный уход за волосами'],
  },
  {
    icon: '📚',
    title: 'Обучение колористике',
    description:
      'Я обучаю системно и с нуля: даю чёткую логику — что смотреть сначала, как думать и не путаться в колористике.',
    features: ['Онлайн и офлайн', 'Доступ сразу после оплаты', '2–3 месяца до результата'],
  },
  {
    icon: '✨',
    title: 'Консультации',
    description:
      'Разбор сложных случаев, помощь в выборе формулы, поддержка на пути к профессионализму в колористике.',
    features: ['Индивидуальный подход', 'Практические советы', 'Поддержка учениц'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeContent>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Услуги</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">
              Чем я могу помочь
            </h2>
          </div>
        </FadeContent>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeContent key={service.title} delay={i * 150}>
              <SpotlightCard className="h-full p-8">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 font-display text-2xl text-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-charcoal/80"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
