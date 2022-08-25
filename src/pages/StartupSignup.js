import React from "react";
import FormComponent from "../components/FormComponent";

const formData = [
  {
    id: "1",
    label: "What is your company called?",
    placeholder: "Company Name",
  },
  {
    id: "2",
    label: "Email Id",
    placeholder: "Email",
  },
  {
    id: "3",
    label: "Contact No",
    placeholder: "Contact No.",
    phone: true,
  },
  {
    id: "4",
    label: "Where is your company based?",
    placeholder: "City",
  },
  {
    id: "5",
    label: "How much you are looking to raise?",
    placeholder: "Amount",
  },
  {
    id: "6",
    label: "Has your Company raised funds before?",
    check: true,
  },
  {
    id: "7",
    label: "How is your company doing?",
    placeholder:
      "Tell us revenues, growth, user, engagements, parteneships or any other metrics that tell a compelling story. ",
  },
];

const StartupSignup = () => {
  return (
    <div className="w-[80%] lg:w-[50%] m-auto mt-8 flex flex-col gap-5">
      <div className="text-[40px] font-bold">Raise with Sateeq</div>
      <div className="text-[20px]">
        Tell us a little about your company. Applications are usually processed
        within 5 working days.
      </div>
      <div className="flex items-center">
        <span className="text-[24px] font-bold">Application</span>
        <hr className="border-[rgba(0,0,0,.12)] grow border-1 mx-[15.5px]" />
      </div>
      <div className="flex flex-col gap-5">
        {formData.map((data) => (
          <FormComponent
            key={data.id}
            label={data.label}
            placeholder={data.placeholder}
            check={data.check}
            phone={data.phone}
          />
        ))}
        <h1 className="text-xl font-semibold mb-1">Has your Company raised funds before?<span className="text-red-600">*</span></h1>  
        <div class="flex justify-center items-center w-[80%] m-auto">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-32 bg-[#F0F8FF] rounded-xl border-[3px] border-blue-400 border-dashed cursor-pointer">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <p class="text-lg">Drag {'&'} Drop or Click here to browse</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  
          <button class="cursor-default py-4 mb-4 px-5 bg-gray-200 border-2 border-gray-300 rounded-xl w-[40%] m-auto  ">Submit</button>
      </div>
    </div>
  );
};

export default StartupSignup;
