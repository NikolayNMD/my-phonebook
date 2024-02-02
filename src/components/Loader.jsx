import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { styled } from 'styled-components';

export const Loader = () => {
  return (
    <LoaderDiv>
      <InfinitySpin
        visible={true}
        width="200"
        color="teal"
        ariaLabel="infinity-spin-loading"
      />
      <Loading>Loading...</Loading>
    </LoaderDiv>
  );
};

export const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.p`
  font: inherit;
  font-size: 16px;
`;
