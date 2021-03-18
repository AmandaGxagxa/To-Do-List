import Edit from "./Edit";
import faker from "faker";
import Global from "../../components/Global/Global";

const config = {
  title: "views/Edit",
};

export default config;

const Default = () => (
  <Global>
    <Edit onSave={console.log} taskId={faker.random.uuid()} />
  </Global>
);
const InitialValue = () => (
  <Global>
    <Edit onSave={console.log} taskId={faker.random.uuid()} initialName={faker.lorem.words()} />
  </Global>
);

export { Default, InitialValue };
