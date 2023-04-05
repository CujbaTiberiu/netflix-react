import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function MovieDetails(props) {
  const params = useParams();
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=c7f5c062&i=${params.id}`
        );
        if (response.ok) {
          let dataMovie = await response.json();
          console.log(dataMovie);
          setMovie(dataMovie);
        } else {
          console.log("errore nella chiamata");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [params.id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${params.id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzNjYzY4MzQzMTAwMTRkZWE3NmYiLCJpYXQiOjE2ODA1MjQyMzYsImV4cCI6MTY4MTczMzgzNn0.YLH4QlKTTzuOdld44CoLeeAvEASUMnx6FxtzocdmucQ",
            },
          }
        );
        if (response.ok) {
          let dataComments = await response.json();
          console.log(dataComments);
          setComments(dataComments);
        } else {
          console.log("errore nella chiamata");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [params.id]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h2 className="text-light">{movie && movie.Title}</h2>
          <img src={movie && movie.Poster} alt={movie && movie.Title} />
          <ListGroup>
            {comments.map((c) => {
              return (
                <ListGroup.Item className="d-flex justify-content-between">
                  {c.comment} | {c.rate}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
