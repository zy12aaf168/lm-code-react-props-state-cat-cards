import cat1 from '../assets/CATIMAGES/cat1.jpg';
import {CatImage} from './cat_image';
import { CATIMAGES } from '../data/cat';

interface AnimalProps {
    id?: string;
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    animalIndex: number;
}

const CatCard: React.FC<AnimalProps> = ({id, name, species, favFoods, birthYear, animalIndex: catIndex}) => {
    return (
    <div className="card">
        <h3 className="card__text card__header">{name}</h3>
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods.join(',')}</p>
        <p className="card__text">Birth Year: {birthYear}</p>
        <CatImage {...CATIMAGES[catIndex]} />
    </div>
    )
}

export default CatCard;