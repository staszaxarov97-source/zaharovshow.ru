import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/IMG_0181.asset.json";
import seated from "@/assets/IMG_0163.asset.json";
import seated2 from "@/assets/IMG_0164.asset.json";
import portrait from "@/assets/portrait.asset.json";
import e1 from "@/assets/event1.asset.json";
import e2 from "@/assets/event2.asset.json";
import e3 from "@/assets/event3.asset.json";
import e4 from "@/assets/event4.asset.json";
import e5 from "@/assets/event5.asset.json";
import e6 from "@/assets/event6.asset.json";
import e7 from "@/assets/event7.asset.json";
import e8 from "@/assets/event8.asset.json";
import p1 from "@/assets/poster1.asset.json";
import p2 from "@/assets/poster2.asset.json";
import p3 from "@/assets/poster3.asset.json";
import p4 from "@/assets/poster4.asset.json";
import p5 from "@/assets/poster5.asset.json";
import p6 from "@/assets/poster6.asset.json";
import p7 from "@/assets/poster7.asset.json";
import p8 from "@/assets/poster8.asset.json";
import p9 from "@/assets/poster9.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Стас Захаров — ведущий мероприятий в Калининграде" },
      { name: "description", content: "Ведущий и комик: свадьбы, корпоративы, выпускные. КВН, «Русские не смеются», «Битва за время». Более 200 мероприятий." },
      { property: "og:title", content: "Стас Захаров — ведущий. Стильно. Смешно. Легко." },
      { property: "og:description", content: "Более 7 лет и 200 мероприятий. Живая импровизация без неловких конкурсов." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+79118531309";
const TG = "https://t.me/staszakharov97";
const HUMOR = "https://vkvideo.ru/playlist/-28219562_55891407";

const projects = [
  { name: "Международная телевизионная лига КВН", note: "Минск", url: "https://vkvideo.ru/video-63032186_456239130" },
  { name: "Русские не смеются", note: "СТС · с 13:53", url: "https://hd.kinopoisk.ru/film/4838cb2e282f0ceebc05fdf41ecf4250?content_tab=series&episode=6&playingContentId=40105f9e07253176a6fcf9834a3f36d7&season=2&watch=" },
  { name: "Исторический стендап", note: "с 3:55", url: "https://youtu.be/joyXjOUZHv8?si=7ZH7DMnm2ZG2RrI7" },
  { name: "Битва за время", note: "ВК · с 25:30", url: "https://vkvideo.ru/video-220754053_456242163?t=5s" },
];

const events = [e1, e2, e3, e4, e5, e6, e7, e8];
const posters = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

const reviews = [
  { name: "Ольга Абрамович", date: "30 июня 2025", text: "Приглашали Станислава вести выпускной в 11 классе, получилось задорно, весело и очень душевно, все пожелания и музыкальные предпочтения учтены. Дети и родители довольны. Цена соответствует качеству!" },
  { name: "Алина", date: "22 июня 2025", text: "Пригласили Стаса на нашу свадьбу в качестве ведущего, это была самая незабываемая свадьба! Все активы, которые придумал Стас, были очень веселыми, подвижными, современными. Спасибо большое за праздник! Советую ❤️" },
];

function Btn({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 font-display text-sm uppercase tracking-wider transition ${ghost ? "border border-foreground/30 hover:border-accent hover:text-accent" : "bg-accent text-accent-foreground hover:brightness-110"}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-sm uppercase tracking-widest">Стас Захаров</a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">Обо мне</a>
            <a href="#tv" className="hover:text-foreground">ТВ</a>
            <a href="#photos" className="hover:text-foreground">Фото</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
          </div>
          <a href="#contacts" className="rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground">Связаться</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative min-h-screen">
        <img src={hero.url} alt="Стас Захаров с микрофоном" className="absolute inset-0 h-full w-full object-cover object-[50%_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Ведущий · Комик · Калининград</p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] md:text-8xl">Стильно.<br />Смешно.<br /><span className="text-accent">Легко.</span></h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#contacts">Обсудить событие</Btn>
            <Btn href={HUMOR} ghost>Как я шучу ▶</Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
        <img src={portrait.url} alt="Портрет Стаса Захарова" className="aspect-square w-full rounded-sm object-cover" />
        <div>
          <h2 className="font-display text-3xl uppercase md:text-4xl">Привет! Меня зовут Станислав</h2>
          <p className="mt-6 text-lg text-muted-foreground">Уже более 7 лет я помогаю создавать события, которые остаются в памяти надолго: от городских праздников до уютных частных вечеринок и современных корпоративов.</p>
          <p className="mt-4 text-lg text-muted-foreground">Мы с командой берем на себя все технические вопросы — есть проверенный диджей и оборудование. Сценарии пишу сам: классика, тимбилдинг или иммерсивное шоу.</p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div><div className="font-display text-5xl text-accent">7+</div><div className="text-sm text-muted-foreground">лет на сцене</div></div>
            <div><div className="font-display text-5xl text-accent">200+</div><div className="text-sm text-muted-foreground">мероприятий</div></div>
          </div>
        </div>
      </section>

      {/* TV */}
      <section id="tv" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl uppercase md:text-5xl">Вы могли меня уже где-то видеть…</h2>
          <p className="mt-6 max-w-2xl text-lg opacity-85">Я начинал как КВНщик, стал автором команд, потом редактором и ведущим. Сегодня я использую весь этот опыт, чтобы ваше событие было наполнено по-настоящему качественным и актуальным юмором.</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-primary-foreground/20 md:grid-cols-2">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 bg-primary p-8 transition hover:bg-background">
                <div>
                  <div className="font-display text-xl uppercase">{p.name}</div>
                  <div className="mt-1 text-sm opacity-75">{p.note}</div>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition group-hover:scale-110">▶</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.2fr] md:items-center">
        <img src={seated.url} alt="Стас Захаров на фоне занавеса" className="w-full rounded-sm object-cover md:order-2" />
        <div>
          <h2 className="font-display text-3xl uppercase md:text-4xl">Мой подход прост</h2>
          <p className="mt-6 text-lg text-muted-foreground">Я за атмосферу свободного общения, а не за неловкие конкурсы. Я не заставляю людей танцевать или участвовать в активностях против их воли — настоящий праздник, это когда каждому гостю максимально комфортно.</p>
          <p className="mt-4 text-lg text-muted-foreground">Благодаря опыту в стендапе я наполняю вечер живой импровизацией. Умею быть серьезным в торжественные моменты, внимателен к деталям и всегда слежу, чтобы каждая фамилия звучала правильно.</p>
          <div className="mt-8"><Btn href={HUMOR}>Примеры, как я шучу ▶</Btn></div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-3xl uppercase md:text-4xl">Фотографии с моих мероприятий</h2>
        <div className="mt-10 columns-2 gap-3 md:columns-4">
          {events.map((e, i) => (
            <img key={i} src={e.url} alt={`Стас Захаров на мероприятии ${i + 1}`} loading="lazy" className="mb-3 w-full break-inside-avoid rounded-sm" />
          ))}
        </div>
      </section>

      {/* Standup */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="max-w-3xl font-display text-3xl uppercase md:text-4xl">Мы могли видеться на стендапе и юмористических шоу в Калининграде</h2>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
            {posters.map((p, i) => (
              <img key={i} src={p.url} alt={`Афиша стендап-концерта ${i + 1}`} loading="lazy" className="h-96 w-auto shrink-0 snap-start rounded-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="max-w-3xl font-display text-3xl uppercase md:text-4xl">Я забываю просить отзывы, но не забываю приехать вовремя и сделать всё качественно</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-sm border bg-card p-8">
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-4 text-lg">«{r.text}»</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground"><span className="font-semibold text-foreground">{r.name}</span> · {r.date}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="relative overflow-hidden">
        <img src={seated2.url} alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_25%] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-32">
          <h2 className="max-w-2xl font-display text-4xl uppercase md:text-6xl">Пора планировать ваше событие!</h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Я на связи и готов встретиться, чтобы обсудить детали и набросать первые идеи для вашего мероприятия.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Btn href={TG}>Telegram @staszakharov97</Btn>
            <Btn href={`tel:${PHONE}`} ghost>+7 911 853-13-09</Btn>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© Стас Захаров, ведущий · Калининград</footer>
    </main>
  );
}
