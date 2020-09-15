import{css, jsx} from "@emotion/core";
import { useContext}  from "react";
import { MovieContext } from "../../../Context/Movie";
import HeroNavLink from "./HeroNavLink";

const HeroNavMenu = () => {
    const {hiddenMenu} = useContext(MovieContext); 

    return(
        <div css={styles} className={(hiddeMenu ? "hidden" : "") + "heroNavMenu"}>
            <HeroNavLink btnText="Filmes Populares"/>
            <HeroNavLink btnText="Todos os filmes"/>
        </div>
    );
};


