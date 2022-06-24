import React from "react";
import styled from "styled-components";
import Section from "./Section";

export default function Home() {
    return (
        <Container>
            <Section title="Model S" description="Order Online for Touchless Delivery" bgimage="model-s.jpg" lbt="Custom Order" rbt="Existing Inventory"/>
            <Section title="Model 3" description="Order Online for Touchless Delivery" bgimage="model-3.jpg" lbt="Custom Order" rbt="Existing Inventory"/>
            <Section title="Model X" description="Order Online for Touchless Delivery" bgimage="model-x.jpg" lbt="Custom Order" rbt="Existing Inventory"/>
            <Section title="Model Y" description="Order Online for Touchless Delivery" bgimage="model-y.jpg" lbt="Custom Order" rbt="Existing Inventory"/>
            <Section title="Lowest Cost Solar Panels in America" description="Money-back guarantee" bgimage="solar-panel.jpg" lbt="Order Now" rbt="Learn More"/>
            <Section title="Solar for New Roofs" description="Solar Roof Costs less Than a New Roof Plus Solar Panels" bgimage="solar-roof.jpg" lbt="Order Now" rbt="Learn More"/>
            <Section title="Accessories" description="" bgimage="accessories.jpg" lbt="Shop Now" />
        </Container>
    )

}


const Container = styled.div`
    height: 100vh;
  z-index:10;
`