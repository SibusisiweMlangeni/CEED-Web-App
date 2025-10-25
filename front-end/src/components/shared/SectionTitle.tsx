import React from 'react';

type SectionTitleProps = {
    title: string;
    subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className='max-w-[1290px] relative text-center mb-[50px] mx-auto'>
        <h2 className="mb-5 xl:mb-[30px] text-[40px] xl:text-5xl">{title}</h2>
        <p className='text-paragraph w-[70%] mx-auto text-lg xl:text-xl'>{subtitle}</p>
    </div>
  )
}

export default SectionTitle