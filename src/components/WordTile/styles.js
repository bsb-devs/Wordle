import styled from "styled-components";


export const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 2px;
  border-radius: 5px;

  border: 1px solid gray;
  background-color: ${({state, label}) =>
    !label ? "transparent" : 
      state === "right-place" ?
        "#6aaa64" :  
        state === "wrong-place" ?
          "#c9b458" :
          "gray"
  };

  label {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;

    color: white;
  }
`;