import Animal from './animal';
import {v4 as uuidv4} from 'uuid'

const DOGDATA: Array<Animal> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
];

DOGDATA.forEach(d => {d.id = uuidv4()});

export default DOGDATA;
