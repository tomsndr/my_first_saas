import {MyButton}  from "../../components/Button";
import {Schwanzmeise_URL} from "../../lib/FunURLs";
import {RickRoll_URL} from "../../lib/FunURLs";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hier ist ein Knopf zu sehen</h1>
        <MyButton/>
      </div>
      <>
      <h1>Hallo</h1>
      <p>Guten Tag, wie geht es dir?</p>
      <p><a href={RickRoll_URL} target="_blank" rel="noopener noreferrer" className= "hover:bg-blue-200">
        Klick mich an.
      </a></p>
      </>
    </>
  );
}

