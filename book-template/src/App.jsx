import Books from './components/Books'

function App()
{
  return(
    <div>
      <Books type="fictional"/>
      <Books type="non_fictional"/>
      <Books type="fantasy"/>
    </div>
  );
}
export default App