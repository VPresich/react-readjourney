const ResponsiveImage = ({ imageData }) => {
  const {
    imgDesktop1x = "",
    imgDesktop2x = "",
    imgMobile1x = "",
    imgMobile2x = "",
    altText = "image",
  } = imageData;

  return (
    <picture>
      {imgDesktop1x && (
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDesktop1x} 1x, ${imgDesktop2x || imgDesktop1x} 2x`}
        />
      )}

      {imgMobile1x && (
        <source
          media="(max-width: 1440px)"
          srcSet={`${imgMobile1x} 1x, ${imgMobile2x || imgMobile1x} 2x`}
        />
      )}

      <img src={imgMobile1x || imgDesktop1x} alt={altText} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
