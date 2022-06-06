import React, { useContext } from "react";
import NavBar from "../Navbar/NavBar";
import { ShowContext } from "../Context/ShowContext";
import Contact from "../Contact/Contact";
import "./Home.css";

const Home = () => {
  const { show, setShow } = useContext(ShowContext);

  return (
    <div className="home-container">
      <NavBar />

      <Contact />

      <div className={show ? "half" : "full"}>

        <div className="home-header">
          <p className="home-p">Vin Diesel</p>
          <img
            src="https://cdn.britannica.com/97/194197-050-5BD88874/Vin-Diesel-The-Fast-and-the-Furious.jpg"
            id="image2"
          />
        </div>
        <h2>
          Vin Diesel, original name Mark Sinclair, (born July 18, 1967, Alameda
          county, California, U.S.), American actor and producer who was best
          known for his action films, most notably the Fast and Furious series.
        </h2>
        <h2>
          Sinclair grew up in New York City with his mother, fraternal twin
          brother, and African American stepfather, Irving Vincent, a theatre
          manager who provided him with some of his first stage roles. While
          still in his teens, he worked as a club bouncer and took the name Vin
          Diesel. He attended Hunter College but dropped out to pursue an acting
          career in Los Angeles.
        </h2>
        <img
          src="https://i.kinja-img.com/gawker-media/image/upload/t_original/vhs6nk9nhzboz2xnjxf8.png"
          id="image"
        />
        <h2>
          After finding little success in Hollywood—his only notable work was an
          uncredited role in Awakenings (1990)—Diesel returned to New York in
          1995. His mother gave him a copy of Rick Schmidt’s book Feature
          Filmmaking at Used-Car Prices (1988), which inspired him to make a
          semiautobiographical short, Multi-Facial (1995), about a biracial
          actor struggling to get roles. He worked as a telemarketer to raise
          the money for his first feature film, Strays (1997). Diesel got his
          big break when director Steven Spielberg, who had seen Multi-Facial,
          cast him in the award-winning Saving Private Ryan (1998). With his
          appealing screen presence—shaved head, muscular physique, raspy voice,
          and rough-hewn charm—Diesel was soon working regularly. He played
          escaped criminal Richard Riddick in the science-fiction film Pitch
          Black (2000) and reprised the character in two more films, The
          Chronicles of Riddick (2004) and Riddick (2013).
        </h2>
        <h2>
          The Fast and the Furious (2001) established Diesel in his most-famous
          role, as the charismatic street racer–thief Dominic Toretto. The
          over-the-top action film cost $38 million to make but was an
          unexpected hit, grossing nearly $145 million in the United States.
          Diesel followed with another action movie, xXx (2002), playing extreme
          athlete turned secret agent Xander Cage, and the crime drama A Man
          Apart (2003). He turned to more humorous fare with The Pacifier (2005)
          and Sidney Lumet’s mob comedy Find Me Guilty (2006).
        </h2>
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/6303/production/_121474352_gettyimages-112254361.jpg"
          id="image"
        />
        <h2>
          Diesel skipped appearing in 2 Fast 2 Furious (2003) and had only a
          cameo in The Fast and the Furious: Tokyo Drift (2006). However, he
          returned to the franchise, both a star and a producer, for Fast &
          Furious (2009), Fast Five (2011), Fast & Furious 6 (2013), and Furious
          7 (2015). The latter was especially successful, earning more than $1.5
          billion to become among the highest-grossing films of all time. The
          franchise continued to do well with The Fate of the Furious (2017) and
          F9: The Fast Saga (2021). Diesel also tried his hand at other genres,
          such as the fantasy thriller The Last Witch Hunter (2015). He then
          rejoined the xXx series in xXx: Return of Xander Cage (2017) after
          passing on the 2005 sequel. He took a break from franchise movies with
          the sci-fi feature Bloodshot (2020).
        </h2>
        <h2>
          Behind the cameras, Diesel used his distinctive voice as the title
          character in the animated The Iron Giant (1999). Later he provided the
          voice for the treelike superhero Groot in Guardians of the Galaxy
          (2014), its sequel (2017), Avengers: Infinity War (2018), and
          Avengers: Endgame (2019).
        </h2>
        <img
          src="https://cdn.britannica.com/43/182843-050-B623067D/Gamora-Star-Lord-Drax-the-Destroyer-Rocket-Raccoon.jpg"
          id="image"
        />
        <h2>
          Random video, because youtube doesn't allow to use links in own pages :(
        </h2>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          id="video"
        />{" "}
      </div>
    </div>
  );
};

export default Home;
