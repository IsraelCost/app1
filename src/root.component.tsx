import * as singleSpa from 'single-spa'

export default function Root(props) {
  const handleClick = () => {
    singleSpa.navigateToUrl('/app2')
  }
  
  return (
    <>
      <h1>App 1</h1>
      <h3>Nome do microfrontend: {props.name}</h3>
      <button onClick={handleClick}>Carregar repositórios</button>
    </>
  )
}
