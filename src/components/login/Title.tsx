const Title = () => {
  return (
    <div className="flex items-center justify-center sm:space-x-4 sm:justify-start">
      <img className="w-32 sm:w-10" src="images/logo.png" alt="logo" />
      <span className="text-2xl font-bold text-blue-500 hidden sm:inline-block dark:text-white">
        Popeke
      </span>
    </div>
  );
};

export default Title;
