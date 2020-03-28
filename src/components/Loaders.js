import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Block = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Page = styled.div`
	justify-content: center;
	align-item:center
	display: flex;
	height: 100vh;
	width: 100%;
`;

export const ButtonLoader = () => (
  <Loader type="Oval" color="white" width="20" height="20" />
);

export const PageLoader = () => (
  <Page>
    <Loader type="TailSpin" color="#cfc02b" width="56" height="56" />
  </Page>
);

export const BlockLoader = () => (
  <Block>
    <Loader type="TailSpin" color="#cfc02b" width="46" height="46" />
  </Block>
);
