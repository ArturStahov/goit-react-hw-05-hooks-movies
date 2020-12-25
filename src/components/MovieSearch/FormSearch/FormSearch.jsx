import { Button, Input, SearchBlock } from './StyledComponent';
import { useState } from 'react';

export default function FormSearch({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handlerInput = e => {
    const { value } = e.target;

    setSearchInput(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <SearchBlock onSubmit={handlerSubmit}>
      <Input
        value={searchInput}
        type="text"
        placeholder="input query"
        onChange={handlerInput}
      />
      <Button type="submit">S</Button>
    </SearchBlock>
  );
}
