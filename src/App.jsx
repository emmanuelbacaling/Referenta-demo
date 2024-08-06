// import { useState } from "react";
import { useState } from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import Select from "./components/Select";

function App() {
  const firebaseRef = collection(firestore, "(default)");

  const [payload, setPayload] = useState({});
  const onSubmit = async () => {
    try {
      const result = await addDoc(firebaseRef, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  console.log(payload);

  return (
    <div className="w-full h-dvh bg-primary">
      <div className="grid place-items-center h-screen px-20">
        <div className="w-full h-auto bg-white rounded-3xl px-8 py-12">
          <div className="grid place-items-center">
            <img
              className="h-14 mb-8 mt-2"
              src="./Referenta.svg"
              alt="referenta"
            />
            <div className="border-4 w-2/5 rounded-xl border-disabled p-4">
              <div className="flex">
                <div className="flex-1 w-6/12 px-5 py-2 font-medium">
                  <TextField
                    name="firstname"
                    onChange={(e) => onHandleChange(e)}
                    inputStyle={{ width: "235px" }}
                    label="First name"
                  />
                </div>
                <div className="flex-1 w-6/12 py-2 font-medium">
                  <TextField
                    name="lastname"
                    onChange={(e) => onHandleChange(e)}
                    inputStyle={{ width: "235px" }}
                    label="Last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-12/12 font-medium px-5 py-2">
                <TextField
                  name="lastname"
                  onChange={(e) => onHandleChange(e)}
                  label="email"
                  type="email"
                />
              </div>
              <div className="flex">
                <div className="flex-1 w-6/12 px-5 py-2 font-medium">
                  <TextField
                    inputStyle={{ width: "235px" }}
                    name="dateofbirth"
                    onChange={(e) => onHandleChange(e)}
                    label="Date of birth"
                    type="date"
                  />
                </div>
                <div className="flex-1 w-6/12 py-2 font-medium">
                  <Select
                    inputStyle={{ width: "235px" }}
                    label="Gender"
                    name="gender"
                    onChange={onHandleChange}
                  >
                    <option>Please select a gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </Select>
                </div>
              </div>
              <div className="w-12/12 font-medium px-5 py-2">
                <TextField
                  name="message"
                  onChange={(e) => onHandleChange(e)}
                  label="Message"
                  type="textarea"
                />
              </div>
              <div className="w-12/12 font-medium px-5 py-2 text-right">
                <Button
                  color="black"
                  style={{
                    width: "130px",
                    backgroundColor: "#1a262f",
                    margin: "0px 10px"
                  }}
                >
                  Reset
                </Button>
                <Button
                  onClick={(e) => onSubmit(e)}
                  color="primary"
                  style={{ width: "130px" }}
                >
                  Send Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
