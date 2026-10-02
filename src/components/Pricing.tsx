import FadeContent from './FadeContent';
import BlurText from './BlurText';
import SpotlightCard from './SpotlightCard';
import { courseTariffs, courseTopics } from '../data/tariffs';

function formatPrice(price: number) {
  return new Intl.NumberFormat('ru-RU').format(price);
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeContent blur>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Тарифы</p>
            <BlurText
              text="Курс «Колористика с нуля»"
              delay={60}
              animateBy="words"
              className="font-display text-3xl text-charcoal md:text-5xl"
            />
            <p className="mx-auto mt-6 max-w-2xl text-warm-gray leading-relaxed">
              Выберите формат обучения — от самостоятельного прохождения до VIP с
              отработкой на моделях. Доступ открывается сразу после оплаты.
            </p>
          </div>
        </FadeContent>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {courseTariffs.map((tariff, i) => (
            <FadeContent key={tariff.id} delay={i * 100}>
              <SpotlightCard
                className={`flex h-full flex-col p-6 ${
                  tariff.highlight ? 'ring-2 ring-gold/50' : ''
                }`}
              >
                {tariff.highlight && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-gold/15 px-3 py-1 text-xs uppercase tracking-wider text-gold">
                    Популярный
                  </span>
                )}
                <h3 className="font-display text-xl text-charcoal">{tariff.name}</h3>
                <p className="mt-2 font-display text-3xl text-gold">
                  {formatPrice(tariff.price)} ₽
                </p>
                <p className="mt-3 text-sm text-warm-gray">{tariff.description}</p>

                <ul className="mt-6 flex-1 space-y-2">
                  {tariff.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-charcoal/85">
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                  {tariff.missing.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-warm-gray/60">
                      <span>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={tariff.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block rounded-full py-3 text-center text-sm uppercase tracking-widest transition-all ${
                    tariff.highlight
                      ? 'bg-charcoal text-cream hover:bg-gold'
                      : 'border border-charcoal/20 text-charcoal hover:border-gold hover:text-gold'
                  }`}
                >
                  Выбрать тариф
                </a>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>

        <FadeContent delay={400}>
          <div className="mt-16 rounded-2xl border border-rose-light/30 bg-cream/50 p-8">
            <h3 className="font-display text-xl text-charcoal">Что входит в программу</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {courseTopics.map((topic) => (
                <li key={topic} className="flex gap-2 text-sm text-warm-gray">
                  <span className="text-gold">•</span>
                  {topic}
                </li>
              ))}
            </ul>
            <a
              href="https://vk.com/uslugi-181330205?screen=group"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-gold underline-offset-4 hover:underline"
            >
              Все тарифы на VK →
            </a>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
