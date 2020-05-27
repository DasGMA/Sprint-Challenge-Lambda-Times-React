import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const BarTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
}

`
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  > span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }

`
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  > span {
    cursor: pointer;
    margin-right: 5%;
  }
  > span:last-child {
    margin-right: 0;
  }
  > span:hover {
    text-decoration: underline;
  }

`
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  > span {
    cursor: pointer;
  }

`


const TopBar = () => {
  let action;
  if(!localStorage.getItem("user")) {
    action = 'LOG IN'
  } else {
    action = 'LOG OUT'
  }

  const logout = () => {
    if(localStorage.getItem("user")) {
      localStorage.removeItem("user");
      window.location.reload(true);
    } else {
      return;
    }
  }

  return (
    <BarTop>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span onClick={logout}>{action}</span>
        </ContainerRight>
      </Container>
    </BarTop>
  )
}

export default TopBar;