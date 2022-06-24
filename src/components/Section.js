import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


export default function Section(props) {
    return (
        <Wrap bgimage={props.bgimage}>
            <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {props.lbt}
                    </LeftButton>
                    {props.rbt &&
                        <RightButton>
                        {props.rbt}
                    </RightButton>
                    }

                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>



        </Wrap>
    )

}

const Wrap = styled.div`

    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/${props => props.bgimage}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;  //vertically aligns items in the flex container
    align-items: center;  //horizontally aligns items in the flex container
`

const ItemText = styled.div`
  z-index:-1;
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: inherit;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
  
    
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
    
`

const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
  
    
`

const Buttons = styled.div`
`