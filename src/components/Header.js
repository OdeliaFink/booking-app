import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './header.css';
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import format from 'date-fns/format';
import styled from 'styled-components';

const icons = [
  { type: faBed, id: 'Stays' },
  { type: faPlane, id: 'Flights' },
  { type: faCar, id: 'Car Rentals' },
  { type: faTaxi, id: 'Airport Taxis' },
];

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const HeaderDiv = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeaderDivContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover{
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
   }
  }
`;
const HeaderButton = styled.div`
  background-color: #0071c2;
  color: white;
  padding: 15px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid white;
  cursor: pointer;
  width: 20%;
`;

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  return (
    <HeaderDiv>
      <HeaderDivContainer>
        <HeaderList>
          {icons.map((icon) => {
            return (
              <HeaderListItem>
                <FontAwesomeIcon icon={icon.type} />
                <span>{icon.id}</span>
              </HeaderListItem>
            );
          })}
        </HeaderList>
        <Title className="header-title">Find your next stay</Title>
        <p className="header-description">
          Search deals on hotels, homes, and much more...
        </p>
        <HeaderButton className="header-button">
          Sign in / Register
        </HeaderButton>
        <div className="header-search">
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="header-search-input"
            />
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="header-search-text"
            >
              {`${format(dateRange[0].startDate, ' MM / dd / yy')} to ${format(
                dateRange[0].endDate,
                ' MM / dd / yy'
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="date"
              />
            )}
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span>{`${options.adult} adult · ${options.children} children ${options.room} room`}</span>
          </div>
          <div className="header-search-item">
            <button className="header-button">Search</button>
          </div>
        </div>
      </HeaderDivContainer>
    </HeaderDiv>
  );
};

export default Header;
