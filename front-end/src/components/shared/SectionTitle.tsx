import React from 'react';

type SectionTitleProps = {
    title: string;
    subtitle: string;
    titleColor?: string;
    subtitleColor?: string;
}

const SectionTitle = ({ title, subtitle, titleColor, subtitleColor }: SectionTitleProps) => {
  return (
    <div className='max-w-[900px] relative text-center mb-[50px] mx-auto'>
        <h2 className={`mb-5 text-${titleColor} xl:mb-[30px] text-[40px] xl:text-5xl font-bold`}>{title}</h2>
        <p className={`text-${subtitleColor} w-[70%] mx-auto text-lg xl:text-xl`}>{subtitle}</p>
    </div>
  )
}

export default SectionTitle