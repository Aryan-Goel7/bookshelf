interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full mx-auto px-2 py-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
