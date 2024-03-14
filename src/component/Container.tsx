import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
  className: string;
};

const Container = ({ children }: TContainer) => {
  return (
    <div className="h-full lg:px-[80px] px-[20px] w-full max-w-[1440px]">
      {children}
    </div>
  );
};

export default Container;
