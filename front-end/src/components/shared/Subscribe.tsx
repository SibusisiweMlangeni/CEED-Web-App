import Link from 'next/link'
import subscribeBg from "@/images/banner/home/subscribe-area.jpg";
import SectionTitle from './SectionTitle';

const Subscribe = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-[140px] text-center"
      style={{ backgroundImage: `url(${subscribeBg.src})` }}
    >
      {/* Content */}
      <div className="relative mx-auto px-4">
        {/* Section Title */}
        <SectionTitle title='Get the Latest Canyon News Delivered to You Inbox' subtitle='Subscribe to Our Newsletter' titleColor='white' subtitleColor='white' />

        {/* Button */}
        <div className="translate-y-4 animate-fadeInUp delay-200">
          <Link
            href="#"
            className="inline-block bg-primary hover:bg-tertiary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Subscribe