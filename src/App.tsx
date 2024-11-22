import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-svh bg-[url('/assets/bg.jpg')] bg-cover bg-center">
      <header className="pt-4 px-6 containerH">
        <div className="flex justify-between items-center py-5 px-6 backdrop-blur border-2 border-sombra skew-x-[-10deg]">
          <a href="#" className="skew-x-[10deg] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-light w-10 h-10"
            >
              <path d="M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44 3.91 3.91 0 0 0-2.54 1.09 10.58 10.58 0 0 0-1.52 1.71 11 11 0 0 0-1.63-1.72 4.39 4.39 0 0 0-2.88-1.08A5 5 0 0 0 3.7 8 11.49 11.49 0 0 0 2 14a7 7 0 0 0 .18 1.64A4.44 4.44 0 0 0 2.71 17a3.23 3.23 0 0 0 3 1.6c1.25 0 2.19-.56 3.3-2a26.4 26.4 0 0 0 2.21-3.6l.63-1.12c.06-.09.11-.18.16-.27l.15.25 1.79 3A14.77 14.77 0 0 0 16 17.63a3.38 3.38 0 0 0 2.55 1 3 3 0 0 0 2.54-1.23 2.2 2.2 0 0 0 .18-.28 4.1 4.1 0 0 0 .31-.63l.12-.35A6.53 6.53 0 0 0 22 15a9 9 0 0 0 0-1 11.15 11.15 0 0 0-1.74-6.2zm-10.12 3.56c-.64 1-1.57 2.51-2.37 3.61-1 1.37-1.51 1.51-2.07 1.51a1.29 1.29 0 0 1-1.15-.66 3.3 3.3 0 0 1-.39-1.7A9.74 9.74 0 0 1 5.54 9a2.8 2.8 0 0 1 2.19-1.47A3 3 0 0 1 10 8.74a14.07 14.07 0 0 1 1 1.31zm8.42 5.12c-.48 0-.85-.19-1.38-.83A34.87 34.87 0 0 1 14.82 12l-.52-.86c-.36-.61-.71-1.16-1-1.65a2.46 2.46 0 0 1 .17-.27c.94-1.39 1.77-2.17 2.8-2.17a3.12 3.12 0 0 1 2.49 1.66 10.17 10.17 0 0 1 1.37 5.34c-.04 1.31-.34 2.43-1.57 2.43z"></path>
            </svg>
            <span className="text-light text-3xl font-medium">Meta</span>
          </a>
          <nav className="skew-x-[10deg]">
            <ul className="flex gap-10">
              <li className="text-gray relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-0 after:h-0.5 hover:after:w-full after:transition-[width] after:duration-300">
                <a>Home</a>
              </li>
              <li className="text-gray relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-0 after:h-0.5 hover:after:w-full after:transition-[width] after:duration-300">
                <a>Como funciona</a>
              </li>
              <li className="text-gray relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-0 after:h-0.5 hover:after:w-full after:transition-[width] after:duration-300">
                <a>Descubra</a>
              </li>
              <li className="text-gray relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-0 after:h-0.5 hover:after:w-full after:transition-[width] after:duration-300">
                <a>Sobre nós</a>
              </li>
              <li className="text-gray relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-0 after:h-0.5 hover:after:w-full after:transition-[width] after:duration-300">
                <a>Blog</a>
              </li>
            </ul>
          </nav>
          <div className="skew-x-[10deg]">
            <Button text="Contato" />
          </div>
        </div>
      </header>
      <main className="flex pt-20 containerH">
        <div className="flex-1">
          <h1 className="text-6xl uppercase font-primary text-light">
            Explore e descubra realidades virtuais no{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
              metaverso
            </span>
          </h1>
          <h2 className="text-gray text-lg my-6">
            Embarque em uma jornada de descoberta no universo dinâmico do
            Metaverso, onde a inovação encontra a imaginação e novas realidades
            ganham vida.
          </h2>
          <Button text="Entrar na lista de espera" />
          <div className="flex gap-4 mt-16">
            <div className="flex">
              <div className="w-12 h-12 border-2 border-gray rounded-full flex justify-center items-center">
                <img
                  src="/assets/expert1.jpg"
                  alt="especialistas"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-12 h-12 border-2 border-gray rounded-full flex justify-center items-center -ml-3">
                <img
                  src="/assets/expert2.jpg"
                  alt="especialistas"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-12 h-12 border-2 border-gray rounded-full flex justify-center items-center text-light bg-btn-bg -ml-3">
                <p>+91</p>
              </div>
            </div>
            <div className="text-lg max-w-44 text-light">
              <p>Conecte-se com nossos especialistas</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/assets/img1.png"
            alt="Pessoa com oculos de realidade virtual"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1366px] flex justify-between py-8 px-8 backdrop-blur-xl rounded-tl-md rounded-tr-md">
          <div className="flex items-center gap-2 text-light">
            <h3 className="text-5xl font-primary font-medium">538K+</h3>
            <h3 className="text-lg">Usuários</h3>
          </div>
          <div className="flex items-center gap-2 text-light">
            <h3 className="text-5xl font-primary font-medium">2000+</h3>
            <h3 className="text-lg">Realidades descobertas</h3>
          </div>
          <div className="flex items-center gap-2 text-light">
            <h3 className="text-5xl font-primary font-medium">850+</h3>
            <h3 className="text-lg">Atualizações</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
