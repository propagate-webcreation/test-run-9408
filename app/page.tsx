export default function Home() {
  return (
    <main className="min-h-dvh">

      {/* hero */}
      <section id="hero" className="relative h-[80vh] flex items-center justify-center bg-primary/10">
        <div className="text-center px-4 max-w-screen-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">志田洋二</h1>
          <p className="text-lg leading-relaxed whitespace-pre-line">志田洋二は、すべてのお客様のためのサービス業です。まずはお気軽にお問い合わせください。</p>
          
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-primary px-8 py-3 text-white font-bold rounded-[8px] hover:opacity-80 transition-opacity min-w-[44px] min-h-[44px]"
              >
                お問い合わせはこちら
              </a>
            </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">サービス一覧</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">志田洋二では、すべてのお客様のニーズに合わせた多彩なサービスをご用意しております。</p>
          
        </div>
      </section>

      {/* about */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">志田洋二について</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">志田洋二はすべてのお客様に選ばれるサービス業です。</p>
          
        </div>
      </section>

      {/* access */}
      <section id="access" className="py-20 px-4">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">アクセス</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">詳細はお問い合わせください。</p>
          
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">2営業日以内にご返信いたします。</p>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block font-bold mb-1">お名前</label>
              <input type="text" name="name" placeholder="例：山田太郎" className="w-full border border-gray-300 p-3 rounded-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">メールアドレス</label>
              <input type="email" name="email" placeholder="例：xxxx@gmail.com" className="w-full border border-gray-300 p-3 rounded-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">電話番号</label>
              <input type="tel" name="phone" placeholder="例：090-1234-5678" className="w-full border border-gray-300 p-3 rounded-sm" />
            </div>
            <div>
              <label className="block font-bold mb-1">その他ご要望</label>
              <textarea name="message" rows={4} placeholder="◯月中の予約を希望" className="w-full border border-gray-300 p-3 rounded-sm" />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 font-bold rounded-[8px] hover:opacity-80 transition-opacity min-h-[48px] text-base"
            >
              送信する
            </button>
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="py-10 px-4 bg-primary text-white">
        <div className="max-w-screen-md mx-auto text-center text-sm space-y-1">
          <p>志田洋二</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} 志田洋二. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
