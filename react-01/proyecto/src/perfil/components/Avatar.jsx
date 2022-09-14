import PropTypes from 'prop-types'

import './Avatar.css';

function Avatar({nombre, esRobot, esSeguido, onToggleSeguir}) {
    const srcImgRobot = "https://avatars.dicebear.com/api/bottts/stefan.svg";
    const srcImgHuman = "https://avatars.dicebear.com/api/open-peeps/stefan.svg";
    const srcImg = esRobot ? srcImgRobot : srcImgHuman;

    function handleClick(e) {
        // alert("es seguido?? " + esSeguido )
        onToggleSeguir(esSeguido);
    }

    return (
        <>
            <img className="avatar-img" src={srcImg} alt="" />
            <p>{nombre} <span onClick={handleClick}>{esSeguido ? '✅' : '❌'}</span></p>
        </>
    )

};

Avatar.propTypes = {
  nombre : PropTypes.string,
  esRobot: PropTypes.bool,
  esSeguido: PropTypes.bool,
  onToggleSeguir: PropTypes.func,
};


export default Avatar;
