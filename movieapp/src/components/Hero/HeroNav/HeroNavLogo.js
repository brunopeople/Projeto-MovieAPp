import {css, jsx} from "@emotion/core";

const HeroNavLogo = () => <h2 css={styles}>
                            Viva Decora
                            <img src="../../assets/logo-viva-decora.png"></img>
                            </h2>;

const styles = css `
    font-size: 22px;
    color: #cb6ad2;
    font-weight: 900;
    user-select: none;
`;

export default HeroNavLogo;
