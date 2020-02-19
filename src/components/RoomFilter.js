import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

//get all unique values

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //get unique types
  let types = getUnique(rooms, 'type');
  //get all
  types = ['all', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={item}>{item}</option>
  })

  let people =getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
  return <option value={item} key={index}>{item}</option>
  })

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/*  select type */}
            <div className="form-group">
              <label htmlFor="type">room type</label>
              <select id="type" 
                name="type" 
                value={type} 
                className="form-control" 
                onChange={handleChange}
              >
                {types}
              </select>
            </div>
          {/* end of select type */}
          {/*  guest type */}
            <div className="form-group">
              <label htmlFor="capacity">Guests </label>
              <select id="capacity" 
                name="capacity" 
                value={capacity} 
                className="form-control" 
                onChange={handleChange}
              >
                {people}
              </select>
            </div>
          {/* end of guest type */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">
              room price ${price}
            </label>
            <input type="range" 
              name="price" 
              min={minPrice} 
              max={maxPrice} 
              id="price" value={price} 
              onChange={handleChange} 
              className="form-control"
            /> 
          </div>
          {/* end of room price */}
          {/* size */}
            <div className="form-group">
              <label htmlFor="size">room size</label>
              <div className="size-inputs">
                <input type="number"
                  name="minSize" 
                  id="minSize" 
                  value={minSize} 
                  onChange={handleChange} 
                  className="size-input"
                />
                <input type="number"
                  name="maxSize" 
                  id="maxSize" 
                  value={maxSize} 
                  onChange={handleChange} 
                  className="size-input"
                />
              </div>
            </div>
          {/* END OF size */}
          {/* extras */}
            <div className="form-group">
              <div className="single-extra">
                <input type="checkbox" 
                  name="breakfast" 
                  id="breakfast" 
                  checked={breakfast} 
                  onChange={handleChange}
                />
                <label htmlFor="breakfast">breakfast</label>
                <input type="checkbox" 
                  name="pets" 
                  id="pets" 
                  checked={pets} 
                  onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
              </div>
            </div>
          {/* end of extras */}
        </form>
      </section >
    )
}