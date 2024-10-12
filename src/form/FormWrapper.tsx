import { ReactNode } from "react";
import Steps from "./Steps";

type FormWrapperProps = {
  title: string;
  info: string;
  children: ReactNode;
};

function FormWrapper({ title, info, children }: FormWrapperProps) {
  return (
    <div className="wrapper">
      <div className="steps">
        <Steps stepNumber="1" stepTitle="STEP 1" stepDesc="YOUR INFO" />
        <Steps stepNumber="2" stepTitle="STEP 2" stepDesc="SELECT PLAN" />
        <Steps stepNumber="3" stepTitle="STEP 3" stepDesc="ADD-ONS" />
        <Steps stepNumber="4" stepTitle="STEP 4" stepDesc="SUMMARY" />
      </div>
      <div className="info">
        <div>
          <h1>{title}</h1>
          <p>{info}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default FormWrapper;
