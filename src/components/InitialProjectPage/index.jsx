import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';

const InitialProjectPage = () =>
{
    return<div>


<div className="grid grid-cols-7 grid-rows-6 gap-4">
    <div className="col-span-3 col-start-3 row-start-2">
      <div className='text-center'>
        <h1 className='text-6xl font-extrabold text-[#f0eded]'>Projects</h1>
        <br/>
        <div className='text-3xl font-bold text-[#f0eded]'>
          <DecryptedText text="Click on any Project to See a Demo"
            animateOn="view"
            revealDirection="center"
            speed={75}/>
        </div>
      </div>
    </div>
    <div className="row-span-2 col-start-3 row-start-3">
        <Card sx={{ maxWidth: "400px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
            Space Invaders Clone
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "center"}}>
            Recreated a popular game using JavaFx, and achieved 90% tested coverage with JUnit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="row-span-2 col-start-4 row-start-3">
        <Card sx={{ maxWidth: "400px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
    <div className="row-span-2 col-start-5 row-start-3">
        <Card sx={{ maxWidth: "400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="col-span-3 col-start-3 row-start-5">
      {/* Insert Button Here to see more projects */}
    </div>
</div>
    
{/* <div className="grid grid-cols-6 grid-rows-6 gap-4">
    <div className="col-span-4 col-start-2 row-start-2">
        <h1>Projects</h1>
    </div>
    <div className="row-span-2 col-start-2 row-start-3">
        <Card sx={{ maxWidth: "400px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="row-span-2 col-start-3 row-start-3">
        <Card sx={{ maxWidth: "400px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
    <div className="row-span-2 col-start-4 row-start-3">
        <Card sx={{ maxWidth: "400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/InitialProjectPage/Placeholder_view_vector.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="row-span-2 col-start-5 row-start-3">

    </div>
    <div className="col-span-4 col-start-2 row-start-5">

    </div>
</div> */}
    </div> 
}

export default InitialProjectPage