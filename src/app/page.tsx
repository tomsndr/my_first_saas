/* eslint-disable @next/next/no-img-element */
import {WikiButton}  from "../../components/Button";
import {Zoro} from "../../lib/People";

export default function Home() {
  return (
    <>
      <h1>{Zoro.name} </h1>
      <img 
        className="avatar"
        src={Zoro.image_URL}
        alt={'Photo of ' + Zoro.name}
        style={{ 
          width: "200px", 
          height: "200px", 
          borderRadius: "50%" }}
      />
      <p> 
        <a href={Zoro.wiki_URL} target="_blank" rel="noopener noreferrer">
          <WikiButton />
        </a>
      </p>
    </>
  );
}

