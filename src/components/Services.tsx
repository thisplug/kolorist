import FadeContent from './FadeContent';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    image: 'service-coloring-800.jpg',
    imageSrcSet: 'service-coloring-400.jpg',
    imageAlt: 'Алёна подбирает оттенок окрашивания вместе с клиенткой',
    icon: undefined,
    title: 'Окрашивание волос',
    description:
      'Сложное окрашивание, тонирование и работа с блондом с бережным отношением к качеству волос.',
    features: ['Сложное окрашивание', 'Работа с блондом', 'Бережный уход за волосами'],
  },
  {
    image: 'service-training-800.jpg',
    imageSrcSet: 'service-training-400.jpg',
    imageAlt: 'Алёна вручает ученице сертификат об обучении колористике',
    icon: undefined,
    title: 'Обучение колористике',
    description:
      'Я обучаю системно и с нуля: даю чёткую логику — что смотреть сначала, как думать и не путаться в колористике.',
    features: ['Онлайн и офлайн', 'Доступ сразу после оплаты', '2–3 месяца до результата'],
  },
  {
    image: 'service-consultations-800.jpg',
    imageSrcSet: 'service-consultations-400.jpg',
    imageAlt: 'Алёна разбирает колористику и формулы за рабочим столом',
    icon: undefined,
    title: 'Консультации',
    description:
      'Разбор сложных случаев, помощь в выборе формулы, поддержка на пути к профессионализму в колористике.',
    features: ['Индивидуальный подход', 'Практические советы', 'Поддержка учениц'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                {service.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${service.image}`}
                    srcSet={`${import.meta.env.BASE_URL}${service.imageSrcSet} 400w, ${import.meta.env.BASE_URL}${service.image} 800w`}
                    sizes="(min-width: 1280px) 341px, (min-width: 1024px) calc((100vw - 272px) / 3), (min-width: 768px) calc((100vw - 256px) / 3), (min-width: 640px) calc(100vw - 114px), calc(100vw - 98px)"
                    width={800}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    alt={service.imageAlt}
                    className="block h-auto w-full rounded-xl"
                  />
                ) : (
                  <span className="text-4xl">{service.icon}</span>
                )}
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
