import { FC, useState, KeyboardEvent, ChangeEvent } from 'react';

interface SearchProps {
  placeholderText: string;
  onSearch: (searchParam: string) => void;
}

const Search: FC<SearchProps> = ({ placeholderText, onSearch }) => {
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState(placeholderText);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
      setValue('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChangeValue}
          value={value}
          onKeyPress={handleKeyPress}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder(placeholderText)}
        />
      </div>
    </div>
  );
};

export default Search;
