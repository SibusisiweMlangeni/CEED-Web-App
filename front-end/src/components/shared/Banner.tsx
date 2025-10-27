import React from "react";

export interface SectionBannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  className?: string;
}

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  description,
  backgroundImage,
  className = "",
}) => {
  // Inline style ensures the background-image comes from JS (not the CSS file).
  const inlineStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const rootClass = `section-banner bg-1 ${className}`.trim();

  return (
    <div className={rootClass} style={inlineStyle}>
      <div className="container">
        <div className="banner-spacing">
          <div className="section-info">
            <h2 data-aos="fade-up" data-aos-delay="100">{title}</h2>
            <p data-aos="fade-up" data-aos-delay="200">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;