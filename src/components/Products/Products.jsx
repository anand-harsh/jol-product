/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from "react";
import { styled } from "@mui/material/styles";
import section1Img from "src/assets/images/image.svg";
import section2Img from "src/assets/images/section2.jpg";
import section3Img from "src/assets/images/section3.jpg"

// import Component1 from 'src/components/Component1/Component1';

const Products1 = styled("div")({
  backgroundColor: `rgba(219, 230, 210, 1)`,
  borderRadius: `0px`,
  display: `grid`,
  gridTemplateRows: `1fr 1fr 1fr`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  height: "100vh",
  padding: `0px`,
  boxSizing: `border-box`,
  overflowX: `hidden`,
});

const Section1 = styled("div")({
  width: `100vw`,
  height: `auto`,
  top: `130px`,
  left: `0px`,
  position: `relative`,
  display: `flex`,
  padding: `2rem`,
  justifyContent: `center`,
});

const Section2 = styled("div")({
  width: `100%`,
  height: `auto`,
  top: `150px`,
  left: `0px`,
  position: `relative`,
  display: `flex`,
  justifyContent: `center`,
  padding: `2rem 2rem 9rem 2rem`,
});

const ProductHead = styled("h1")({
  position: `absolute`,
  maxWidth: `100%`,
  height: `auto`,
  width: `auto`,
  color: `#000`,
  fontFamily: `Inter`,
  fontsize: `16rem`,
  fontStyle: `normal`,
  fontWeight: `400`,
  lineHeight: `normal`,
  justifyContent: `center`,
});

const HandleDiv = styled("div")({
  position: `relative`,
  left: `0rem`,
  top: `13rem`,
  display: `flex`,
  gridTemplateColumns: `2fr 3fr`,
  justifyContent: `center`,
  alignItems: `center`,
  height: `auto`,
  padding: `0em 6em 6em 2em`,
});

const ImageHandle = styled("img")({
  objectFit: `contain`,
  position: `relative`,
  width: `70%`,
  height: `auto`,
  mixBlendMode: `multiply`,
  filter: `contrast(1)`,
  zIndex: `1`,
  left: `0px`,
});
const ImageHandle2 = styled("img")({
  objectFit: `contain`,
  position: `relative`,
  width: `70%`,
  height: `auto`,
  mixBlendMode: `multiply`,
  filter: `contrast(1)`,
  zIndex: `1`,
  left:`20%`
});

const ImageDes = styled("h2")({
  fontWeight:`400`,
  fontSize: `2rem`,
  display: `flex`,
  justifyContent: `center`,
  wordWrap: `break-word`,
  width: `50%`,
  position: `relative`,
  top: `-2rem`,
});

const Product = ({ img }) => {
  return (
    <div>
      <ImageHandle src={img} alt="imageLoading" />
    </div>
  );
};
const Product2 = ({ img }) => {
  return (
    <div>
      <ImageHandle2 src={img} alt="imageLoading" />
    </div>
  );
};

function Products(props) {
  return (
    <Products1 className={props.className}>
      <Section1>
        <img
          src={section1Img}
          alt="section1"
          style={{
            mixBlendMode: `multiply`,
            filter: `contrast(1)`,
            width: `100%`,
            height: `auto`,
          }}
        />
      </Section1>

      <Section2>
        <ProductHead>{`Our Products`}</ProductHead>
        <HandleDiv>
          <Product img={section2Img} />
          <ImageDes>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</ImageDes>
        </HandleDiv>
      </Section2>

      <Section2>
        <HandleDiv>
          
          <ImageDes style={{position:`relative`,right:`-8rem`}}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</ImageDes>
          <Product2 img={section3Img}/>
        </HandleDiv>
      </Section2>
    </Products1>
  );
}

// const MdiHeart = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `40px`,
//   height: `38px`,
//   left: `413px`,
//   top: `1909px`,
//   overflow: `hidden`,
// });

// const Vector = styled('img')({
//   height: `38px`,
//   width: `40px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `0px`,
// });

// const Q = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(36, 255, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Slabo 13px`,
//   fontWeight: `400`,
//   fontSize: `19px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   textShadow: `0px 4px 14px rgba(36, 255, 0, 1)`,
//   width: `12px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `15px`,
//   top: `5px`,
// });

// const OurProducts = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `80px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `471px`,
//   top: `1132px`,
// });

// const Image14 = styled('img')({
//   height: `423.62px`,
//   width: `308px`,
//   objectFit: `cover`,
//   position: `absolute`,
//   left: `157px`,
//   top: `1376px`,
// });

// const LoremIpsumIsSimplyDu = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `30px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   width: `737px`,
//   height: `419px`,
//   position: `absolute`,
//   left: `643px`,
//   top: `1359px`,
// });

// const LoremIpsumIsSimplyDu1 = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `30px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   width: `737px`,
//   height: `463px`,
//   position: `absolute`,
//   left: `71px`,
//   top: `2108px`,
// });

// const IonBatteryChargingSh = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `74px`,
//   height: `30px`,
//   left: `68px`,
//   top: `1910px`,
//   overflow: `hidden`,
// });

// const Vector1 = styled('img')({
//   height: `28.09px`,
//   width: `21.2px`,
//   position: `absolute`,
//   left: `23px`,
//   top: `1px`,
// });

// const Vector2 = styled('img')({
//   height: `28.04px`,
//   width: `62.44px`,
//   position: `absolute`,
//   left: `2px`,
//   top: `1px`,
// });

// const Vector3 = styled('img')({
//   height: `16.01px`,
//   width: `61.62px`,
//   position: `absolute`,
//   left: `10px`,
//   top: `7px`,
// });

// const EffectiveCharging = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Slabo 13px`,
//   fontWeight: `400`,
//   fontSize: `25px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   width: `221px`,
//   height: `32px`,
//   position: `absolute`,
//   left: `159px`,
//   top: `1909px`,
// });

// const IncreasedLifeSpan = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Slabo 13px`,
//   fontWeight: `400`,
//   fontSize: `25px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   width: `225px`,
//   height: `32px`,
//   position: `absolute`,
//   left: `475px`,
//   top: `1913px`,
// });

// const AbsoluteRealityV16De = styled('img')({
//   height: `604.32px`,
//   width: `365px`,
//   position: `absolute`,
//   left: `931px`,
//   top: `1974px`,
// });

// const MultiTerrian = styled('div')({
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `49px`,
//   height: `46.41px`,
//   left: `695px`,
//   top: `2669px`,
// });

// const MdiMountain = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `49px`,
//   height: `46.41px`,
//   left: `0px`,
//   top: `0px`,
//   overflow: `hidden`,
// });

// const Vector4 = styled('img')({
//   height: `31.91px`,
//   width: `44.92px`,
//   position: `absolute`,
//   left: `2px`,
//   top: `3px`,
// });

// const TablerRoad = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `18.38px`,
//   height: `17.63px`,
//   left: `28px`,
//   top: `18px`,
//   overflow: `hidden`,
// });

// const Vector5 = styled('img')({
//   height: `16.67px`,
//   width: `14.45px`,
//   position: `absolute`,
//   left: `2px`,
//   top: `1px`,
// });

// const Vector21 = styled('img')({
//   height: `16.67px`,
//   width: `12.64px`,
//   position: `absolute`,
//   left: `3px`,
//   top: `1px`,
// });

// const Rectangle22 = styled('div')({
//   backgroundColor: `rgba(0, 0, 0, 1)`,
//   borderRadius: `3px`,
//   width: `1.81px`,
//   height: `3.57px`,
//   position: `absolute`,
//   left: `8px`,
//   top: `1px`,
// });

// const Rectangle23 = styled('div')({
//   backgroundColor: `rgba(0, 0, 0, 1)`,
//   borderRadius: `3px`,
//   width: `1.81px`,
//   height: `3.57px`,
//   position: `absolute`,
//   left: `8px`,
//   top: `5px`,
// });

// const Rectangle24 = styled('div')({
//   backgroundColor: `rgba(0, 0, 0, 1)`,
//   borderRadius: `3px`,
//   width: `1.81px`,
//   height: `3.57px`,
//   position: `absolute`,
//   left: `8px`,
//   top: `10px`,
// });

// const Rectangle25 = styled('div')({
//   backgroundColor: `rgba(0, 0, 0, 1)`,
//   borderRadius: `3px`,
//   width: `1.81px`,
//   height: `3.57px`,
//   position: `absolute`,
//   left: `8px`,
//   top: `15px`,
// });

// const UseableOnMultiTerrai = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Slabo 13px`,
//   fontWeight: `400`,
//   fontSize: `25px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `749px`,
//   top: `2678px`,
// });

// const RaphaelFuture = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `43px`,
//   height: `41px`,
//   left: `1092px`,
//   top: `2671px`,
//   overflow: `hidden`,
// });

// const Vector6 = styled('img')({
//   height: `38px`,
//   width: `39.9px`,
//   position: `absolute`,
//   left: `3px`,
//   top: `3px`,
// });

// const FuturisticDesign = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 1)`,
//   fontStyle: `normal`,
//   fontFamily: `Slabo 13px`,
//   fontWeight: `400`,
//   fontSize: `25px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `1145px`,
//   top: `2677px`,
// });

// const Footer = styled('div')({
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `1440px`,
//   height: `171px`,
//   left: `-1px`,
//   top: `2821px`,
// });

// const Rectangle19 = styled('div')({
//   backgroundColor: `rgba(225, 225, 225, 1)`,
//   borderRadius: `0px`,
//   width: `1440px`,
//   height: `171px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `0px`,
// });

// const Group15 = styled('div')({
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `185px`,
//   height: `46px`,
//   left: `1150px`,
//   top: `63px`,
// });

// const IcOutlineFacebook = styled('div')({
//   backgroundColor: `rgba(56, 102, 65, 1)`,
//   borderRadius: `22px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `46px`,
//   height: `46px`,
//   left: `139px`,
//   top: `0px`,
//   overflow: `hidden`,
// });

// const Vector7 = styled('img')({
//   height: `42.97px`,
//   width: `43.08px`,
//   position: `absolute`,
//   left: `1px`,
//   top: `1px`,
// });

// const RiInstagramLine = styled('div')({
//   borderRadius: `12px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `36px`,
//   height: `36px`,
//   left: `0px`,
//   top: `8px`,
//   overflow: `hidden`,
// });

// const Vector8 = styled('img')({
//   height: `35.45px`,
//   width: `35.45px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `0px`,
// });

// const FaBrandsTwitter = styled('div')({
//   borderRadius: `0px`,
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `42px`,
//   height: `42px`,
//   left: `66px`,
//   top: `2px`,
//   overflow: `hidden`,
// });

// const Vector9 = styled('img')({
//   height: `34.11px`,
//   width: `42px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `4px`,
// });

// const Image17 = styled('div')({
//   backgroundImage: `url(${Image17Image})`,
//   backgroundPosition: `center`,
//   backgroundSize: `cover`,
//   backgroundRepeat: `no-repeat`,
//   borderRadius: `0px`,
//   mixBlendMode: `darken`,
//   width: `95px`,
//   height: `71px`,
//   position: `absolute`,
//   left: `71px`,
//   top: `50px`,
// });

// // const Component11 = styled(Component1)(({ theme }) => ({
// //   width: `2870px`,
// //   height: `801px`,
// //   position: `absolute`,
// //   left: `0px`,
// //   top: `245px`,
// // }));

// const Navbar = styled('div')({
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `row`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `1440px`,
//   height: `159px`,
//   left: `0px`,
//   top: `0px`,
// });

// const Rectangle9 = styled('div')({
//   backgroundColor: `rgba(225, 225, 225, 1)`,
//   borderRadius: `0px`,
//   width: `1440px`,
//   height: `159px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `0px`,
// });

// const Home = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 0.57)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `24px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `1028px`,
//   top: `65px`,
// });

// const Products2 = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 0.57)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `24px`,
//   letterSpacing: `0px`,
//   textDecoration: `underline`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `1125px`,
//   top: `65px`,
// });

// const Image171 = styled('div')({
//   backgroundImage: `url(${Image171Image})`,
//   backgroundPosition: `center`,
//   backgroundSize: `cover`,
//   backgroundRepeat: `no-repeat`,
//   borderRadius: `0px`,
//   mixBlendMode: `darken`,
//   width: `95px`,
//   height: `71px`,
//   position: `absolute`,
//   left: `68px`,
//   top: `44px`,
// });

// const Calculator = styled('div')({
//   textAlign: `left`,
//   whiteSpace: `pre-wrap`,
//   fontSynthesis: `none`,
//   color: `rgba(0, 0, 0, 0.57)`,
//   fontStyle: `normal`,
//   fontFamily: `Inter`,
//   fontWeight: `400`,
//   fontSize: `24px`,
//   letterSpacing: `0px`,
//   textDecoration: `none`,
//   textTransform: `none`,
//   position: `absolute`,
//   left: `1257px`,
//   top: `65px`,
// });

{
  /* <MdiHeart>
        <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
        <Q>{`+`}</Q>
      </MdiHeart>
      <OurProducts>{`Our Products`}</OurProducts>
      <Image14 src={Image14Image} loading="lazy" alt={'image 14'} />
      <LoremIpsumIsSimplyDu>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </LoremIpsumIsSimplyDu>
      <LoremIpsumIsSimplyDu1>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </LoremIpsumIsSimplyDu1>
      <IonBatteryChargingSh>
        <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
        <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
        <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
      </IonBatteryChargingSh>
      <EffectiveCharging>{`Effective charging`}</EffectiveCharging>
      <IncreasedLifeSpan>{`Increased life-span`}</IncreasedLifeSpan>
      <AbsoluteRealityV16De
        src={AbsoluteRealityV16DeImage}
        loading="lazy"
        alt={
          'Absolute_Reality_v16_Design_a_cuttingedge_dirt_standup_escoote_1-removebg-preview 2'
        }
      />
      <MultiTerrian>
        <MdiMountain>
          <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
        </MdiMountain>
        <TablerRoad>
          <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
          <Vector21 src={Vector21Image} loading="lazy" alt={'Vector 2'} />
          <Rectangle22></Rectangle22>
          <Rectangle23></Rectangle23>
          <Rectangle24></Rectangle24>
          <Rectangle25></Rectangle25>
        </TablerRoad>
      </MultiTerrian>
      <UseableOnMultiTerrai>{`Useable on Multi-terrain`}</UseableOnMultiTerrai>
      <RaphaelFuture>
        <Vector6 src={Vector6Image} loading="lazy" alt={'Vector'} />
      </RaphaelFuture>
      <FuturisticDesign>{`Futuristic design`}</FuturisticDesign>
      <Footer>
        <Rectangle19></Rectangle19>
        <Group15>
          <IcOutlineFacebook>
            <Vector7 src={Vector7Image} loading="lazy" alt={'Vector'} />
          </IcOutlineFacebook>
          <RiInstagramLine>
            <Vector8 src={Vector8Image} loading="lazy" alt={'Vector'} />
          </RiInstagramLine>
          <FaBrandsTwitter>
            <Vector9 src={Vector9Image} loading="lazy" alt={'Vector'} />
          </FaBrandsTwitter>
        </Group15>
        <Image17></Image17>
      </Footer>
      {/* <Component11 /> */
}
{
  /* <Navbar>
        <Rectangle9></Rectangle9>
        <Home>{`Home`}</Home>
        <Products2>{`Products`}</Products2>
        <Image171></Image171>
        <Calculator>{`Calculator`}</Calculator>
      </Navbar> */
}

export default Products;
