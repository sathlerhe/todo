import React from "react";
import { Link } from "react-router-dom";

import { Container, Card, CardText } from "./styles";

const Home: React.FC = () => {
  const cards = [
    {
      img: "../../public/assets/notes.png",
      link: "/notes",
      title: "Notes",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quam optio placeat impedit nesciunt fuga delectus, vero ea illo nulla maiores, adipisci temporibus obcaecati magni ipsa velit, ducimus culpa cupiditate.",
    },
    {
      img: "../../public/assets/list.png",
      link: "/list",
      title: "ToDo List",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quam optio placeat impedit nesciunt fuga delectus, vero ea illo nulla maiores, adipisci temporibus obcaecati magni ipsa velit, ducimus culpa cupiditate.",
    },
  ];

  return (
    <Container>
      {cards?.map((card) => (
        <Link key={card?.title} to={card?.link}>
          <Card>
            <img src={card?.img} alt={card?.title} />
            <CardText>
              <h1>{card?.title}</h1>
              <p>{card?.description}</p>
            </CardText>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default Home;
