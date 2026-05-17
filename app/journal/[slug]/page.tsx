import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/data';
import type { Metadata } from 'next';
import styles from './page.module.css';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const bodyLines = post.body.split('\n\n').filter(Boolean);

  return (
    <>
      <div className={styles.cover}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className={styles.cover__img}
        />
        <div className={styles.cover__overlay} />
        <div className={`container ${styles.cover__content}`}>
          <span className={`label ${styles.cat}`}>
            {post.category === 'transit' ? 'Transit Guide' : 'Stays & Hideaways'}
          </span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>{post.subtitle}</p>
          <div className={styles.meta}>
            <span>{post.location}</span>
            <span className={styles.dot} />
            <span>{post.date}</span>
            <span className={styles.dot} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <article className={styles.article}>
            <p className={styles.lede}>{post.excerpt}</p>
            <div className={styles.divider} />
            {bodyLines.map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={i} className={styles.subhead}>{line.replace(/\*\*/g, '')}</h3>;
              }
              if (line.startsWith('**')) {
                const parts = line.split('**').filter(Boolean);
                return (
                  <p key={i} className={styles.para}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              return <p key={i} className={styles.para}>{line}</p>;
            })}
          </article>

          <aside className={styles.aside}>
            <div className={styles.aside__card}>
              <span className="label label--accent">Quick Facts</span>
              <dl className={styles.facts}>
                <dt>Destination</dt>
                <dd>{post.location}</dd>
                <dt>Category</dt>
                <dd>{post.category === 'transit' ? 'Transit Guide' : 'Stays & Hideaways'}</dd>
                <dt>Published</dt>
                <dd>{post.date}</dd>
                <dt>Read time</dt>
                <dd>{post.readTime}</dd>
              </dl>
            </div>
            <div className={styles.aside__card}>
              <span className="label label--sage">Get Prepared</span>
              <p className={styles.aside__body}>
                Download multilingual communication flashcards for this destination in the Pocket Toolkit.
              </p>
              <Link href="/toolkit" className={styles.aside__btn}>
                Open Toolkit &rarr;
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.related__title}>Continue Reading</h2>
            <div className={styles.related__grid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/journal/${r.slug}`} className={styles.related__card}>
                  <div className={styles.related__img}>
                    <Image src={r.image} alt={r.title} fill sizes="(max-width: 768px) 100vw, 40vw" className={styles.img} />
                    <div className={styles.related__overlay} />
                  </div>
                  <div className={styles.related__body}>
                    <p className={styles.related__meta}>{r.location} &bull; {r.readTime}</p>
                    <h3 className={styles.related__h}>{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
