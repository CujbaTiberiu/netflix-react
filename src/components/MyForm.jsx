import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class MyForm extends Component {
  state = {
    search: "",
    filteredMovies: this.props.movies,
  };

  funcSearch = (e) => {
    const search = e.target.value;
    const filteredMovies = this.props.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    ); //toLowerCase su entrambi cosi sicuramente non sarà case sensitive
    this.setState({ search, filteredMovies });
  };
  render() {
    const { filteredMovies } = this.state;
    //const {movie} = this.props
    return (
      <Container>
        <Form.Group className="mb-3">
          <Form.Label className="fs-2 mt-3">Search a movie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search a movie"
            value={this.state.search} //prende il valore dell'input
            onChange={this.funcSearch} //al cambio di valore scatta funcSearch che filtra e renderizza i libri in base alle key scritte
          />
        </Form.Group>
        <Row>
          {filteredMovies.map((movie) => {
            return (
              <Col
                key={movie.asin}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="gy-2"
              >
                {movie.Title}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MyForm;
