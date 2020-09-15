import{css, jsx} from "@emotion/core";
import HeroNav from "./HeroNav/HeroNav";
import OutPut from "../OutPut/Output";

const Hero = () => {
    return(
        <section css={styles} className="hero">
            <HeroNav/>
            <OutPut/>
        </section>
    );
};

const styles = css `

width: 100%;
min-height: 100vh;
background: #1b1c22;
`;