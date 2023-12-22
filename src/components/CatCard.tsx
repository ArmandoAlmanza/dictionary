import React, { useEffect, useState } from "react";
import { CatBreed } from "../interfaces/CatInterface";
import { getBreedData } from "../api/axiosResponse";
import Stars from "./Stars";
import Rating from "./Rating";

const CatCard = ({
    weight,
    id,
    name,
    cfa_url,
    vetstreet_url,
    vcahospitals_url,
    temperament,
    origin,
    country_codes,
    country_code,
    description,
    life_span,
    indoor,
    lap,
    alt_names,
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    intelligence,
    shedding_level,
    social_needs,
    stranger_friendly,
    vocalisation,
    experimental,
    hairless,
    natural,
    rare,
    rex,
    suppressed_tail,
    short_legs,
    wikipedia_url,
    hypoallergenic,
    reference_image_id,
    image,
}: CatBreed) => {
    // const [catBreed, setCatBreed] = useState<CatBreed>();

    // useEffect(() => {
    //     getBreedData(catId).then((data) => {
    //         setCatBreed(data.data);
    //         console.log(data.data);
    //     });
    // }, [catId]);
    return (
        <article className="flex flex-col gap-3 justify-center bg-white w-full p-5 rounded-2xl">
            <img
                className="min-h-48 max-h-48 w-11/12 max-w-fit md:min-w-48 mx-auto"
                src={image.url}
                alt="image cat"
            />
            <h1 className="relative text-xl">
                {name}{" "}
                <span className="font-second text-gray-400">({origin})</span>
                <small className="text-sm italic absolute top-0 left-44">
                    {id}
                </small>
                <p className="text-sm italic">{alt_names} </p>
            </h1>

            <div>
                <p>Temperament:</p>
                <div className="grid grid-cols-2">
                    {temperament.split(",").map((item, i) => (
                        <React.Fragment key={i}>
                            <span key={i} className="text-blue-400">
                                {item}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="flex flex-col mx-auto content-center md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 md:mx-0">
                <Rating
                    title="Affection Level"
                    stars={affection_level}
                    short="affective"
                />
                <Rating
                    title="Adaptability"
                    stars={adaptability}
                    short="adaptable"
                />
                <Rating
                    title="Child Friendly"
                    stars={child_friendly}
                    short="child friendly"
                />
                <Rating
                    title="Dog Friendly"
                    stars={dog_friendly}
                    short="dog friendly"
                />
                <Rating
                    title="Energy Level"
                    stars={energy_level}
                    short="energetic"
                />
                <Rating title="Grooming" stars={grooming} short="groomy" />{" "}
                <Rating
                    title="Social Needs"
                    stars={social_needs}
                    short="social"
                />
            </div>

            <p className="text-justify">{description}</p>
            <a
                className="inline-block w-fit underline italic text-lg text-blue-400 transition-colors hover:text-purple-600 duration-300"
                href={wikipedia_url}
                target="_blank"
            >
                More info
            </a>
        </article>
    );
};

export default CatCard;
