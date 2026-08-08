type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;