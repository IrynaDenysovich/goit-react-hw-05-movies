import {Form} from './SearchBox.styled'

const SearchBox = () => {
  return (
    <div>
      <Form>
        <input type="text" name="query"></input>
        <button>Search</button>
      </Form>
    </div>
  );
};

export default SearchBox;
