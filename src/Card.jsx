import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inicio", src: "Chart_fill" },
    { title: "Contacto", src: "Chat" },
    { title: "Cuentas", src: "User", gap: true },
    { title: "Cronograma ", src: "Calendar" },
    { title: "Buscar", src: "Search" },
    { title: "Analisis", src: "Chart" },
    { title: "Archivos", src: "Folder", gap: true },
    { title: "Ajustes", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Control De Hoteles
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Control Hoteles</h1>
        <br></br>
        <p className="texto1">
          El Control Interno es la base donde descansan gran parte de las actividades y operaciones del hotel, y está diseñado para facilitar la
          consecución de los siguientes objetivos: la eficacia y las eficiencias de las operaciones; la confiabilidad de la información financiera; y el cumplimiento de las leyes,
          reglamentos y políticas internas. Dicho proceso es ejecutado por el consejo de administración,  la dirección y el resto del personal del hotel, por lo que todas las áreas
          del hotel deben contar con este tipo de controles, desde la reservación de las habitaciones hasta el mantenimiento,  brindando así  un grado de seguridad razonable a la
          conducción del negocio.
        </p>
        <br></br>
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <img src="./src/assets/Hotel-5.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hotel Royal</h5>
                <p className="card-text">
                destinos para disfrutar de Solo Buenos Recuerdos. 
                Hotel royal ubicado en la ciudad colonial Antigua Guatemala. Destinos en los 
                que podrás disfrutar desde unas vacaciones en familia, la organización un evento social o corporativo y vivir Solo Buenos Recuerdos.
                </p>
              </div>
              <div className="card-footer">
              <a href="#" class="btn btn-primary">Reserva Ya</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="./src/assets/Hotel-9.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hotel Madrid</h5>
                <p className="card-text">
                destinos para disfrutar de Solo Buenos Recuerdos. 
                Hotel madrid ubicado en la ciudad colonial Antigua Guatemala. Destinos en los 
                que podrás disfrutar desde unas vacaciones en familia, la organización un evento social o corporativo y vivir Solo Buenos Recuerdos.
                </p>
              </div>
              <div className="card-footer">
                 <a href="#" class="btn btn-primary">Reserva Ya</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="./src/assets/Hotel-8.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hotel Delux</h5>
                <p className="card-text">
                destinos para disfrutar de Solo Buenos Recuerdos. 
                Hotel Delux ubicado en la ciudad colonial Antigua Guatemala. Destinos en los 
                que podrás disfrutar desde unas vacaciones en familia, la organización un evento social o corporativo y vivir Solo Buenos Recuerdos.
                </p>
              </div>
              <div className="card-footer">
              <a href="#" class="btn btn-primary">Reserva Ya</a>
              </div>
            </div>
          </div>
        </div>
        </div>

                

















      </div>
    </div>
  );
};
export default NavBar;
