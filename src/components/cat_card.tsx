import cat1 from '../assets/CATIMAGES/cat1.jpg';
import {CatImage} from './cat_image';
import { CATIMAGES } from '../data/cat';

interface CatCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    catIndex: number;
}

const CatCard: React.FC<CatCardProps> = (props) => (
    <div className="card">
        <h3 className="card__text card__header">{props.name}</h3>
        <p className="card__text">Species: {props.species}</p>
        <p className="card__text">Favourite Food(s): {props.favFoods}</p>
        <p className="card__text">Birth Year: {props.birthYear}</p>
        <CatImage {...CATIMAGES[props.catIndex]} />
    </div>)

export default CatCard;