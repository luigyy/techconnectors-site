const NavbarModal = ({
  title,
  description,
  setModal,
}: {
  title: string;
  setModal: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
  description: string;
}) => {
  return (
    <div>
      {title ? (
        <div className="fixed inset-0 z-50  bg-zinc-800/40 opacity-100 backdrop-blur-sm">
          <div className="scale-10 fixed inset-x-4 top-8 z-50 mx-auto max-h-[80%] w-[90%] max-w-[800px]  origin-top overflow-y-scroll rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5">
            <div className="flex items-center justify-center">
              <h1 className=" mx-auto mb-10 text-center font-fjalla text-lg tracking-wider text-zinc-700 md:text-4xl">
                {title}
              </h1>
              <button
                className="absolute right-0 top-4 rounded-full p-5  md:right-4"
                onClick={() => setModal({ title: "", description: "" })}
              >
                <h1 className=" text-5xl font-semibold">X</h1>
              </button>
            </div>
            <p className="px-2 tracking-wide md:text-xl">{description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarModal;
