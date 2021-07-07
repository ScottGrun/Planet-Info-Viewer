import styled from 'styled-components';
import Image from 'next/image'
import Earth from '../../public/assets/planet-earth.svg'
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

export default function PlanetImgContainer({ className, imgSrc, sizes }) {
  const [planetSize, setPlanetSize] = useState(0);
  const { width } = useWindowSize();

  useEffect(()=>{
    if(width > 1440){
      setPlanetSize(2);
    } else if (width > 768){
      setPlanetSize(1);
    } else {
      setPlanetSize(0)
    }
  }, [width])


  return (
        <Wrapper className={className}>
          <Image alt="Planet" eager="true"  src={imgSrc} layout="fixed" height={sizes[planetSize]} width={sizes[planetSize]} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
min-height: 314px;

@media ${(p) => p.theme.QUERIES.tabletAndUp} {
  height: 100%;
}

@media ${(p) => p.theme.QUERIES.laptopAndUp} {
  height: 100%;
}


`;
