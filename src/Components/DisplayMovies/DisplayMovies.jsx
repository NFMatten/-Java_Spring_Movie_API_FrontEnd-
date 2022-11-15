import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { Container, Grid } from "@mui/material";

const DisplayMovies = (props) => {
  const { movies } = props;

  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={`${movie.id}`}>
            <Card sx={{ maxWidth: 375, maxHeight: 600 }}>
              <CardHeader
                action={<IconButton aria-label="settings"></IconButton>}
                title={movie.name}
                subheader={`${movie.director} - ${movie.genre} `}
              />
              <CardMedia
                padding="1em"
                component="img"
                height="600"
                image={`${movie.imgUrl}`}
                alt={`${movie.name} movie poster`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DisplayMovies;
