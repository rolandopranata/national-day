import React from 'react';

export function Search({ query, setQuery }) {
  return (
    <div className='search-wrapper'>
      <label htmlFor='search-form'>
        <input
          className='w-full py-2 px-3 bg-slate-700 rounded-md placeholder:text-white'
          type='text'
          name='search-form'
          id='search-form'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </div>
  );
}
