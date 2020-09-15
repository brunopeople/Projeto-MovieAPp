import {css, jsx} from "@emotion/core";
import {useContext} from "react";
import {MovieContext} from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";

const PopularMovies = () => {
    const {PopularMovies} = useContext(MovieContext);

    return (
        <div cass={styles} className="popularMovies">
            <Container>
                {PopularMovies.results &&
                PopularMovies.results.map((popularMovieItem, index) =>(
                    <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
                    alt="poster"
                    />
                ))}
            </Container>
        </div>
    );
};

const styles = css `
    width: 100%;
    .container{
        &:nth-child(1){
            height: 81vh;
            overflow-y: scroll;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            &::-webkit-scrolbar {
                width: 0;
            }

            .error{
                font-size: 38px;
                color: red;
                height: 32px;
            }
        }

            img{
                width: 100%;
                max-width: 240px;
                height: 360px;
                margin: 10
            }
        }

        @media(max-width: 600px){
            .container{
                img{
                    max-width: 100%;
                    height: 500px;
                }
            }
        }

        @media(min-width: 601px) and(max-width: 854px){
            .container {
                img{
                    max-width: 31%;
                }
            }
        }

        @media (min-width: 1145px) and (max-with:1365px){
            .container{
                img{
                    max-width: 23.4%;
                }
            }
        }
`;

export default PopularMovies; 