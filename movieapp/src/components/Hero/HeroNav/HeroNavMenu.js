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

const styles = css `
    padding-left: 80px;
    @media(max-width: 860px){
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0,0,0,0.8);
    padding-left: 0;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 80ms ease-in-out;
    &.hidden{
        left: -600px;
        opacity: 0;
    }
}
`;

export default HeroNavMenu;
