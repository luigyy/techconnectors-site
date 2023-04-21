const NavbarModal = ({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: (state: boolean) => void;
}) => {
  return (
    <div>
      {modal ? (
        <div className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm">
          <div className="scale-10 fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5">
            <div className="flex items-center justify-between">
              <h1 className=" font-fjalla tracking-wider text-zinc-700">
                Navigation
              </h1>
              <button onClick={() => setModal(false)}>
                <h1 className=" text-lg font-semibold">X</h1>
              </button>
            </div>
            <ul className="font-display -my-2 divide-y divide-zinc-100 pt-5 text-base  font-normal normal-case text-zinc-600">
              <li>
                <a
                  onClick={() => setModal(false)}
                  href="#services"
                  className="block py-2 "
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  onClick={() => setModal(false)}
                  href="https://calendly.com/techconnectors/30min"
                  target="_blank"
                  className="block py-2 "
                >
                  Agendar cita
                </a>
              </li>
              <li>
                <a
                  onClick={() => setModal(false)}
                  href="#form"
                  className="block py-2 "
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarModal;
