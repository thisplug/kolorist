export default function Footer() {
  return (
    <footer className="border-t border-rose-light/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display text-lg text-charcoal">
          Алёна <span className="text-gold">Михайлова</span>
        </p>
        <p className="text-sm text-warm-gray">
          Колорист · Обучение колористике · Челябинск
        </p>
        <a
          href="https://vk.com/mikhailova__hair"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold hover:underline"
        >
          ВКонтакте
        </a>
      </div>
    </footer>
  );
}
