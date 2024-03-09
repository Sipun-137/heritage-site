'use client'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface datatType {
  name: string;
  capital: string;
  imgurl: string;
}

export default function StateCard({ name, capital, imgurl }: datatType) {
  const router=useRouter()
  return (
    <Card className="w-80 rounded-xl shadow-md shadow-slate-400 " onClick={()=>{router.push(`/state/${name}`)}}>
      <CardMedia
        className="h-80"
        component="img"
        height="194"
        image={imgurl}
        alt={`${name}`}
      />
      <CardContent className="text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 uppercase font-serif"
        >
          {name}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium capitalize font-mono"
        >
          {capital}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center gap-7 pt-2">
        <Button size="small" href={`/state/${name}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
