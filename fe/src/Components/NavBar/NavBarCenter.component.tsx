type NavBarCenterProps = {
  subtitle: string;
};

const NavBarCenterComponent = ({ subtitle }: NavBarCenterProps) => {
  return (
    <div className="flex justify-center flex-1 items-center">
      <div className="py-1 px-4 border-solid border rounded-full border-gray-500 text-gray-500 text-sm">
        {subtitle}
      </div>
    </div>
  );
};

export default NavBarCenterComponent;
