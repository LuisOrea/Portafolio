import Title from "../components/Title";

export default function About() {
  return (
    <div className="mt-13 p-10 max-w-240 mx-auto">
      <Title title="Sobre mi" />
      <div className="mt-10 flex gap-10  ">
        <div>
          <img
            className="object-fill rounded-2xl"
            src="/public/imgs/me.jpg"
            alt="me-img"
          />
        </div>
        <div className="text-justify">
          <span className="flex gap-7">
            <b>Luis Adrian Martinez Orea</b>
            <p>26 años | MEX</p>
          </span>
          <p className="mt-2">
            Hola, mi nombre es Luis Adrian Martinez Orea, mejor conocido como
            Elmo.
          </p>
          <p>
            Me considero una persona estable y con hambre de crecer dentro del
            mundo tecnológico, alguien que no se conforma con cumplir, sino que
            busca dejar huella en cada proyecto que toca.
          </p>
          <p>
            Dentro de mis pasiones entran los deportes, escuchar musica, leer
            libros, juegos de logica, entre otros. Soy una persona poliglota por
            lo que puedo saber un poco de todo aunque no profundice puedo
            resolver problemas sin ayuda alguna, pero cuando lo es necesario la
            pido.
          </p>
          <p>
            No me gusta ser una persona presumida, mucho menos arrogante,
            prefiero ser alguien humilde, alguien que pueda aportar y absorber
            conocimiento de alguien que ofrezca lo mismo
          </p>
        </div>
      </div>
    </div>
  );
}
