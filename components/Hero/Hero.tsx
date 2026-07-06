import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={`container ${css.heroInner}`}>
        <div className={css.content}>
          <p className={css.eyebrow}>Road-ready comfort, reimagined</p>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            Discover warm, design-led escapes with a modern fleet built for slow mornings and sunlit
            miles.
          </p>
          <Link href="/catalog" className={css.btn}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
