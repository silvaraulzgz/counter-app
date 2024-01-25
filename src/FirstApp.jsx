import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {


  return (

    <>
    <h1>{ title }</h1>
    <p>{ subTitle }</p>
    <p>{ name }</p>
    </>

  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Raul Silva',
  subTitle: 'No hay subtitulo',
  // title: 'No hay título',

}