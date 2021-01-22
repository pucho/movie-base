type imageProps = {
  src: string;
  width?: number;
  heigth?: number;
  alt: string;
};

const Icon = ({ src, width = 20, heigth = 20, alt }: imageProps) => {
  return <img width={width} height={heigth} src={src} alt={alt} />;
};

export default Icon;
