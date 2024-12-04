import { useRef } from "react";

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Error al reproducir el audio:", error);
      });
    }
  };

  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center text-center text-white"
      style={{
        height: "100vh",
        background: `url(/img/dahmer.jpg) no-repeat center center/cover`,
      }}
    >
      <h1 className="display-3 fw-bold">Cómo ta muchacho</h1>
      <p className="fs-4 mt-3">
        Te gustan los malandros? Amas que te roben más que solo el corazón y la
        mirada? Entonces llegaste al lugar adecuado. Bienvenido a Visual Crime,
        la App número 1 para ligar con criminales.
      </p>
      <button className="btn btn-danger btn-lg mt-4" onClick={handlePlayAudio}>
        Más información
      </button>

      {/* Audio oculto */}
      <audio ref={audioRef} loop>
        <source src="/audio.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </main>
  );
};

export default Home;
