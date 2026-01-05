'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteTestimonial() {
  const { language } = useLanguage()

  const paragraphs = language === 'JP'
    ? [
        'ボクシングは怪我と隣り合わせの競技で、打撲や擦り傷、切り傷は避けられません。',
        'しかしマザーベジタブルに出会い、患部に使用することで、これまで経験したことのない速さで回復し、大きな驚きを感じました。',
        'さらに摂取してみると、体調が整い、練習時のパフォーマンスも向上しました。その結果、選手一人ひとりの調子が上がり、チーム全体の士気や競技力も高まり、良い選手が育つ好循環が生まれています。',
        '加えて、使うほど環境にも優しいという点も魅力で、キックボクシングに取り組みながら地球の改善にもつながる点に共感が広がり、多くの人に支持されています。'
      ]
    : [
        'Boxing inevitably involves injuries such as bruises, scrapes, and cuts.',
        "However, after discovering Mother Vegetable and applying it to injured areas, I was surprised by how quickly the wounds recovered.",
        'When I also tried taking it internally, my physical condition improved and my training performance increased. As a result, each athlete’s condition improved, team morale and overall performance rose, and a positive cycle began in which better athletes are developed.',
        "Another appeal is that it becomes more environmentally friendly the more it is used. The idea of continuing kickboxing while also contributing to the improvement of the Earth has resonated with many people."
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
          Voice
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Testimonial with image */}
        <div className="max-w-4xl mx-auto">
          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="/voice.jpg"
              alt={language === 'JP' ? '故郷と自然への想い' : 'Connection to hometown and nature'}
              width={800}
              height={450}
              className="w-full h-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Comment - paragraphs */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Name */}
          <div className="mt-6 text-right">
            <p className="text-[#25c760] text-sm md:text-base font-semibold">
              {language === 'JP' ? 'KNOCK OUT' : 'KNOCK OUT'}
            </p>
            <p className="text-gray-400 text-[10px] md:text-xs">
              {language === 'JP' ? 'キックボクシング団体' : 'Professional Kickboxing Organization'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
