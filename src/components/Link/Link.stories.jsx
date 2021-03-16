import Global from "../Global/Global";
import Link from "./Link";

const config = {
  title: "components/Link",
};

export default config;

const Default = () => (
  <Global>
    <Link url="/test">Click me!</Link>
  </Global>
);
const Full = () => (
  <Global>
    <Link url="/test" fullWidth>
      Click me!
    </Link>
  </Global>
);
const Disabled = () => (
  <Global>
    <Link url="/test" disabled>
      Click me!
    </Link>
  </Global>
);
export { Default, Full, Disabled };
