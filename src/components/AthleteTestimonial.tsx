'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteTestimonial() {
  const { language } = useLanguage()

  const testimonials = [
    {
      product: 'Achieve',
      comment: language === 'JP'
        ? '世界の舞台で戦うアスリートにとって、体調管理は最も重要な課題です。Achieveには48種類もの栄養素が含まれていて、一度に効率よく摂取できるのが本当に助かっています。特に試合が続く時期は、筋肉疲労の回復や持続力の維持が欠かせません。添加物のデトックス効果もあり、トレーニング効果を最大限に引き出してくれます。プロとして体の健康管理を徹底する中で、Achieveは私の強い味方になっています。'
        : 'For athletes competing on the world stage, physical conditioning is the most critical challenge. Achieve contains 48 different nutrients that I can efficiently consume all at once, which is incredibly helpful. Especially during tournament seasons, muscle recovery and maintaining endurance are essential. It also helps detoxify additives and maximizes my training effectiveness. As a professional dedicated to thorough health management, Achieve has become my trusted ally.',
    },
    {
      product: 'Confidence',
      comment: language === 'JP'
        ? '女性アスリートとして、試合や練習に追われる日々の中で、なかなかスキンケアに時間をかけられないのが現実です。でも、Confidenceに出会ってからは、シンプルなケアで肌の調子を整えられるようになりました。しみやニキビ跡のケア、そして自然なトーンアップ効果で、メイクをしなくても健康的な美しさを保てています。アスリートとしての強さと、女性としての美しさ、その両方を叶えてくれるConfidenceは、私にとって欠かせない存在です。'
        : 'As a female athlete, the reality is that I barely have time for skincare between matches and training. But since discovering Confidence, I can maintain my skin condition with simple care. It helps with dark spots and acne scars, and the natural tone-up effect allows me to maintain a healthy beauty even without makeup. Confidence fulfills both my strength as an athlete and my beauty as a woman—it has become indispensable to me.',
    },
  ]

  return (
    <section className="py-5 md:py-5 bg-black">
      <div
        className="mx-auto px-4 md:px-8 py-8 md:py-12 w-[97%] md:w-[90%]"
        style={{
          maxWidth: '1500px',
          border: '2px solid #25c760',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold text-center mb-2 md:mb-4"
          style={{ color: '#25c760' }}
        >
          {language === 'JP' ? 'アスリートの声' : 'Athlete Voice'}
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Athlete Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8 md:mb-12">
          <Image
            src="/nagahara_achieve.png"
            alt="Wakana Nagahara"
            width={200}
            height={250}
            className="w-32 md:w-40 rounded-lg object-contain"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-bold text-[#25c760] mb-1">
              {language === 'JP' ? '永原 和可那' : 'Wakana Nagahara'}
            </h3>
            <p className="text-sm md:text-base text-green-400 font-semibold">
              {language === 'JP' ? 'バドミントン世界選手権 2連覇' : '2-TIME WORLD BADMINTON CHAMPION'}
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 md:p-6"
              style={{ border: '1px solid #25c760' }}
            >
              <h4
                className="text-base md:text-xl font-bold mb-3 md:mb-4"
                style={{ color: '#25c760' }}
              >
                {item.product}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                「{item.comment}」
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
