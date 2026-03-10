import { Canvas } from "@react-three/fiber";
import clsx from "clsx";

import StudioLights from "./three/StudioLights";

import { features } from "../constants/index";

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div key={index} className={clsx("box", `box${index + 1}`, feature.styles)}>
            {feature.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
