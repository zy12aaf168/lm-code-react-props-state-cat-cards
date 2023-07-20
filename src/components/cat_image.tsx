interface CatImageProps {
    image: string;
    altText: string;
    licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

export const CatImage: React.FC<CatImageProps> = (imageProp) => (
    <>
        <img src={imageProp.image} alt={imageProp.altText} className="card__image" />
        <p className='card__text__small'>
			Image licenced under <a href={imageProp.licenceUrl}>{imageProp.licenceType}</a>
			{imageProp.attributionName && (
				<>
					&nbsp;by <a href={imageProp.attributionUrl}>{imageProp.attributionName}</a>
				</>
			)}
		</p>
    </>
);
